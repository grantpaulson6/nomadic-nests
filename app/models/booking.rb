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
    validate :noDoubleBookings, :startBeforeEndDate

    belongs_to :listing

    belongs_to :nomad,
    foreign_key: :nomad_id,
    class_name: :User

#optimize here
    def noDoubleBookings
        if !self.start_date || !self.end_date
            errors.add(:booking, "dates required")
            return
        end
        bookings = Booking.where(listing_id: self.listing_id)
        bookings.each do |booking|
            if booking.end_date >= self.start_date && booking.start_date <= self.end_date
                errors.add(:booking, "isn't available")
                return
            elsif booking.start_date <= self.end_date && booking.end_date >= self.start_date
                errors.add(:booking, "isn't available")
                return
            end
        end
    end

    def startBeforeEndDate
        if self.start_date < Time.now || self.end_date < Time.now
            errors.add(:booking, "cannot be in the past")
            return
        end
        if !self.start_date || !self.end_date
            return
        end
        if self.start_date > self.end_date
            errors.add(:booking, "isn't meaningful")
            return
        end
    end

end
