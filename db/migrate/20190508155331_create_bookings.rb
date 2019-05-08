class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :nomad_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
    add_index :bookings, :listing_id
    add_index :bookings, :nomad_id
    add_index :bookings, :start_date
    add_index :bookings, :end_date
  end
end
