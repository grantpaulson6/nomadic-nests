# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  price         :float            not null
#  location_id   :integer          not null
#  description   :text             not null
#  property_type :string           not null
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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
