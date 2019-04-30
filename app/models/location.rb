# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  lat        :float            not null
#  lng         :float           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord

    validates :name, :lat, :lng, presence: true
    validates :name, uniqueness: true
    
    has_many :listings

end
