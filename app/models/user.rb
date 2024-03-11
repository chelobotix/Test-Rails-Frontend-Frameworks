class User < ApplicationRecord
  acts_as_target email: :email, email_allowed: false, notifier_name: :name

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable
  has_many :posts, dependent: :destroy
  has_many :messages, dependent: :destroy
end
