
class PagesController < ApplicationController
  def index
  end

  def basic_datatable
    @users = User.all
  end

end
