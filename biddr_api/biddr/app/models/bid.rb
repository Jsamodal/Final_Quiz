class Bid < ApplicationRecord
    belongs_to :bid
    belongs_to :user, optional: true
end
