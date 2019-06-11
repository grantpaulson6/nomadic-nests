class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listings_params)
        location = Location.find_by(name: params[:listing][:location])
        @listing.location_id = location.id if location
        @listing.owner_id = current_user.id
        if @listing.save
            render "api/listings/show"
        else
            render "api/errors/listing_errors", status: 422
        end
    end

    def destroy
        listing = Listing.find(params[:id])
        listing.destroy

    end

    def index

        max_guests = params[:filters][:guests] == "" ? 0 : params[:filters][:guests]
        
        
        max_lat = params[:filters][:bounds][:north]
        max_lng = params[:filters][:bounds][:east]
        min_lat = params[:filters][:bounds][:south]
        min_lng = params[:filters][:bounds][:west]
        min_price = params[:filters][:min_price] != "" ? params[:filters][:min_price] : -1
        max_price = params[:filters][:max_price] != "" ? params[:filters][:max_price] : 999999
        property_type = params[:filters][:property_type] #!= "" ? `LIKE #{params[:filters][:property_type]}` : "IS NOT NULL"
        @page_size = 10
        offset = params[:filters][:page].to_i*@page_size

        if params[:filters][:mapSearch] == "false"
            location = Location.find(params[:filters][:location])
            if property_type == ""
                @listings = Listing.with_attached_photos.offset(offset).limit(@page_size)
                    .where(["location_id = ? and max_guests >= ? and price >= ? and price <= ?",
                    location.id, max_guests, min_price, max_price])
            else
                @listings = Listing.with_attached_photos.offset(offset).limit(@page_size)
                    .where(["location_id = ? and max_guests >= ? and price >= ? and price <= ? and property_type = ?",
                    location.id, max_guests, min_price, max_price, property_type])
            end
        else
            if property_type == ""
                @listings = Listing.with_attached_photos.offset(offset).limit(@page_size)
                    .where(["max_guests >= ? and lat <= ? and lng <= ? and lat >= ? and lng >= ? and price >= ? and price <= ?", 
                max_guests, max_lat, max_lng, min_lat, min_lng, min_price, max_price])
            else
                @listings = Listing.with_attached_photos.offset(offset).limit(@page_size)
                    .where(["max_guests >= ? and lat <= ? and lng <= ? and lat >= ? and lng >= ? and price >= ? and price <= ? and property_type = ?", 
                max_guests, max_lat, max_lng, min_lat, min_lng, min_price, max_price, property_type])
            end
        end
    end

    def show
        @listing = Listing.with_attached_photos.find(params[:id])
    end

    private
    def listings_params
        params.require(:listing).permit(:title, :price, :description, :property_type,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng, photos: [])
    end
end
