json.extract! listing, :id, :title, :price, :location_id, :description, :property_type, :owner_id,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng
json.photoUrls [url_for(listing.photos.first)]