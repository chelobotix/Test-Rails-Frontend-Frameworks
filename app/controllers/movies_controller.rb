class MoviesController < ApplicationController
  before_action :authenticate_user!, :set_paper_trail_whodunnit

  def index
    puts('**************')
    puts(current_user)
  end

  def datatable
    render(json: MovieDatatable.new(params, view_context: view_context))
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.new(movie_params)
    if movie.save!
      puts('yes')
    else
      render(root_path)
    end
  end

  private

  # article params
  def movie_params
    params.require(:movie).permit(:name, :year)
  end
end
