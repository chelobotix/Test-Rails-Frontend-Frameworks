class ReactAppController < ApplicationController
  layout 'react_app'

  def index
    @react_app_props = { movies: Movie.all }
  end
end
