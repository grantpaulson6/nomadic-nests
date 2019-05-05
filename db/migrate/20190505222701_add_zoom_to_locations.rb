class AddZoomToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :zoom, :integer
  end
end
