class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
        t.string :title
        t.string :body
        t.integer :amount
      t.timestamps
    end
  end
end
