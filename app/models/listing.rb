# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  price         :float            not null
#  location_id   :integer          not null
#  description   :text             not null
#  property_type          :string           not null
#  owner_id      :integer          not null
#  max_guests    :integer          not null
#  num_beds      :integer          not null
#  num_bathrooms :integer          not null
#  address       :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Listing < ApplicationRecord

    validates :title, :price, :location_id, :description, :property_type, :owner_id, :max_guests,
        :num_beds, :num_bathrooms, :address, :lat, :lng, presence: true
    validates :title, uniqueness: true
    validate :ensure_photos

    belongs_to :location
    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many_attached :photos

    def ensure_photos
        unless self.photos.attached?
            errors[:photos] << "must be attached"
        end
    end
end
