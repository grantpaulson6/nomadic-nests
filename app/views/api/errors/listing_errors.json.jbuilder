@listing.errors.keys do |field|
    json.set! field do
        # json.extract! error, 
        @listing.errors.full_messages_for(field)
    end
end