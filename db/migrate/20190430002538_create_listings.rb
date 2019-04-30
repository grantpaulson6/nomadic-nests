class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.float :price, null: false
      t.integer :location_id, null: false
      t.text :description, null: false
      t.string :property_type, null: false
      t.integer :owner_id, null: false
      t.integer :max_guests, null: false
      t.integer :num_beds, null: false
      t.integer :num_bathrooms, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
    add_index :listings, :title, unique: true
    add_index :listings, :location_id
    add_index :listings, :owner_id
  end
end
