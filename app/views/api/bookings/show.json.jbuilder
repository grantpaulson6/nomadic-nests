

json.listing do
    json.partial! "api/listings/listing", listing: @listing
end

json.booking do
    json.extract! @booking, :id, :listing_id, :nomad_id, :start_date, :end_date
end
