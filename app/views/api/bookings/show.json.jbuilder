

json.listing do
    json.partial! "api/listings/listing", listing: @listing
end

json.bookings do
    json.set! @booking.id do
        json.extract! @booking, :id, :listing_id, :nomad_id, :start_date, :end_date
    end
end
