@listings.each do |listing|
    json.set! listing.id do
        json.partial! "api/listings/listing", listing: listing
    end
end