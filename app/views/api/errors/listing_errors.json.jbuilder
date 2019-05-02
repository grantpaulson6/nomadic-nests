@listing.errors.keys.each do |field|
    json.set! field, @listing.errors.full_messages_for(field)
end