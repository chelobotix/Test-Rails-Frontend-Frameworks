class PagesController < ApplicationController
  def index
    @last = Movie.last
  end

  def basic_datatable
    @users = User.all
  end
end
