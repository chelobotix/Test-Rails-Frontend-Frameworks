class PagesController < ApplicationController
  def index
    @last_movie = Movie.last
  end

  def basic_datatable
    @users = User.all
  end
end
