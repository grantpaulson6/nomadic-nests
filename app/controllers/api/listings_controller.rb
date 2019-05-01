class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listings_params)
        location = Location.find_by(name: params[:listing][:location])
        @listing.location_id = location.id if location
        @listing.owner_id = current_user.id
        if @listing.save
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
            # render "api/errors/listing_errors"
        end
    end

    def update

    end

    def index
        @listings = Listing.all
        #lots of updating here to filter
    end

    def show
        @listing = Listing.find_by(id: params[:id])
    end

    private
    def listings_params
        params.require(:listing).permit(:title, :price, :description, :property_type,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng, photos: [])
    end
end
