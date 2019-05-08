class Api::BookingsController < ApplicationController

    def create
        @booking = Booking.new(booking_params)
        @booking.nomad_id = current_user.id
        if @booking.save
            @listing = Listing.find(params[:booking][:listing_id])
            render "api/bookings/show"
        else
            render "api/errors/booking_errors", status: 422
        end
    end

    private
    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :listing_id)
    end
end
