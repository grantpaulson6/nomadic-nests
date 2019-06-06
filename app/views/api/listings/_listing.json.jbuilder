json.extract! listing, :id, :title, :price, :description, :property_type, :owner_id,
            :max_guests, :num_beds, :num_bathrooms, :address, :lat, :lng
json.location Location.find(listing.location_id).id
json.photoUrls listing.photos.map {|photo| url_for(photo.variant(resize: "400x400")).html_safe }
# json.photoUrls listing.photos.map {|photo| image_tag(photo.variant(resize: "256x256")).html_safe }
# json.photoUrls listing.photos.map {|photo| url_for(photo) }
json.booking_ids listing.booking_ids