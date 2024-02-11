class PagesController < ApplicationController
  def index
    @last_movie = Movie.last
    @messages = Message.all
    @new_message = Message.new
  end

  def basic_datatable
    @users = User.all
  end
end
