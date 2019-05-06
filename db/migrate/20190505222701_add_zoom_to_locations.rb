class AddZoomToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :zoom, :integer, default: 6
  end
end
