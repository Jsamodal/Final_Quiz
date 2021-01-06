class AddReferences < ActiveRecord::Migration[6.0]
  def change
    add_reference :bids, :user, foreign_key: true
    add_reference :auctions, :user, foreign_key: true
  end
end
