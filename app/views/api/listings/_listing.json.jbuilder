json.extract! listing, :title, :price, :location_id, :description, :property_type, :owner_id,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng
json.photoUrl url_for(listing.photos.first)