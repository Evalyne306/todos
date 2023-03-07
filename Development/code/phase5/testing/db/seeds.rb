require 'faker'


image_urls = [
  "https://i.ebayimg.com/images/g/oZ0AAOSwSj1jJjKs/s-l500.jpg",
  "https://images.squarespace-cdn.com/content/v1/5cfebab7bfcecb000194cc60/1606995884060-YBKE625L9W8H36EQJ230/44+Fear+and+Loathing+in+Las+Vegas.jpg?format=500w",
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/vice-web.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCjEy6jqy7rA5n4wTSv1Een8h2Ibcm05PHpwaFzwn&s",
  "https://files.ekmcdn.com/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg?v=599d4741-9423-4652-b292-e55e0354b409",
  "https://chargefield.com/wp-content/uploads/2022/05/blacksite_poster.jpg",
  "https://i0.wp.com/www.starmometer.com/wp-content/uploads/2013/03/The-Host-Movie-Poster-Large.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/metropolis.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/vertigo.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/jaws.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/blade-runner.jpg",
  "https://i.ebayimg.com/images/g/Kg4AAOSwQYFgwgEq/s-l500.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/jurassic-park.jpg",
  "https://www.bellanaija.com/wp-content/uploads/2017/01/Arbitration2-723x1024.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/pulp-fiction.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/the-usual-suspects.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/little-miss-sunshine.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/the-dark-knight-rises.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/moon.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/the-silence-of-the-lambs.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/the-thing.jpg",
  "https://www.companyfolders.com/blog/media/2017/07/star-wars-a-new-hope.jpg"
]
11.times do

  User.create(
    full_name: Faker::Name.name,
    email: Faker::Internet.email,
    password_hash: Faker::Internet.password,
    created_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    updated_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    
  )
end
10.times do
  random_date = Faker::Date.between(from: 10.years.ago, to: Date.today)
    Movie.create(
      title: Faker::Movie.title,
      description: Faker::Lorem.paragraph,
      due: Faker::Time.forward(days: 30),
      createdAt: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
      status: rand(0..1),
      poster: image_urls.sample,
      year: random_date.year.to_s
    )
  end