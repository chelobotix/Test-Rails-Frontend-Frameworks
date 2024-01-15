require 'faker'

30.times do
  User.create!(name: Faker::Internet.username, age: rand(10..50))
end

100.times do
  rand = rand(1..30)
  Post.create!(title: Faker::Games::Heroes.artifact, user_id: rand)
end

100.times do
  Movie.create!(name: Faker::Movie.title, year: rand(1930..2024))
end

100.times do
  MusicAlbum.create!(title: Faker::Music.band, genre: Faker::Music.genre, tracks: rand(1..30), date_of_released: Faker::Date.between(from: '1999-01-01', to: '2024-01-01'), country: Faker::Address.country, tag: "tag#{rand(1..10)}")
end
