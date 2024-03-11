class Movie < ApplicationRecord
  has_paper_trail

  acts_as_notifiable :users,
                     targets: ->(_movie, _key) { User.all },
                     notifiable_path: :movie_notifiable_path

  after_commit :notify_all_users, on: :create

  def notify_all_users
    notify(:users, key: "movie #{name} created")
  end

  def movie_notifiable_path
    movie_path(self)
  end
end
