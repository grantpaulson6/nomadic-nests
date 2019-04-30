class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listings_params)
        if @listing.save
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
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
        params.reqiure(:listing).permit(:title, :price, :location_id, :description, :property_type, :owner_id,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng)
    end
    #owner_id will be grabbed using current_user
end
