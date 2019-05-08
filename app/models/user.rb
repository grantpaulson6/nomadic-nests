# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  gender          :string
#  birthdate       :date
#  about           :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    attr_reader :password
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :username, :password_digest, :session_token, :first_name, :last_name, :email, presence: true
    validates :username, :session_token, :email, uniqueness: true
    #validation for gender inclusion?

    has_many :listings,
    foreign_key: :owner_id,
    class_name: :Listing

    has_many :bookings,
    foreign_key: :nomad_id,
    class_name: :Booking

    after_initialize :ensure_session_token!
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.valid_password?(password)
            return user
        end
        nil
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    #ensures unique session token
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.save!
        self.session_token
    end
end
