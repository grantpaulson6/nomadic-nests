
json.listings do
    @listings.each do |listing|
        json.set! listing.id do
            json.partial! "api/listings/listing", listing: listing
        end
    end
end

json.bookings do
    @listings.each do |listing|
        listing.bookings.each do |booking|
            json.set! booking.id do
                json.extract! booking, :id, :listing_id, :nomad_id, :start_date, :end_date
            end
        end
    end
end
