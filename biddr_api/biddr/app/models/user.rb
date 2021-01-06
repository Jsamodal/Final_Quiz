class User < ApplicationRecord
    has_many :auctions, dependent: :nullify
    has_many :bids, dependent: :nullify
    has_secure_password
    
    def full_name
        "#{first_name} #{last_name}"
    end

end
