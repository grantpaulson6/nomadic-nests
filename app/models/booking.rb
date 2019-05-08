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

class Booking < ApplicationRecord

    validates :listing_id, :nomad_id, :start_date, :end_date, presence: true

    belongs_to :listing

    belongs_to :nomad,
    foreign_key: :nomad_id,
    class_name: :User

end
