# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  listing_id :integer          not null
#  nomad_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
