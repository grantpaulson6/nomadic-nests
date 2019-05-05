

locations.each do |location|
    json.set! location.id do
        json.extract! location, :id, :name, :lat, :lng
        json.listing_count location.listings.count
    end
end