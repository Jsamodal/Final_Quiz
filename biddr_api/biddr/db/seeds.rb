# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

10.times do 
    first_name=Faker::Name.first_name
    last_name=Faker::Name.last_name
    User.create(
        first_name:first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password_digest: 'qweqwe'
    )
end
users=User.all

20.times do
    created_at = Faker::Date.backward(days:365*5)

    Auction.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::ChuckNorris.fact,
        amount: rand(100_000),
        created_at:created_at,
        updated_at:created_at,
        user: users.sample
    )

end
auctions = Auction.all





auctions.each do |a|
    5.times do
        Bid.create(
            bid: 100,
            auction_id: a.id,
            user: users.sample
        )
    end
end

bids = Bid.all

super_user=User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email:"jonsnow@hotmail.com",
    password: 'qweqwe',

)