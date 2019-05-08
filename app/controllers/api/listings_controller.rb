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

    def update

    end

    def index
        location = Location.find_by(name: params[:filters][:location])
        max_guests = params[:filters][:guests] == "" ? 0 : params[:filters][:guests]
        max_lat = params[:filters][:bounds][:north]
        max_lng = params[:filters][:bounds][:east]
        min_lat = params[:filters][:bounds][:south]
        min_lng = params[:filters][:bounds][:west]
        
        if location
            @listings = Listing.with_attached_photos.where(["location_id = ? and max_guests >= ? and lat <= ? and lng <= ? and lat >= ? and lng >= ?", 
            location.id, max_guests, max_lat, max_lng, min_lat, min_lng])
        else
            @listings = Listing.with_attached_photos.where(["max_guests >= ? and lat <= ? and lng <= ? and lat >= ? and lng >= ?", 
            max_guests, max_lat, max_lng, min_lat, min_lng])
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
