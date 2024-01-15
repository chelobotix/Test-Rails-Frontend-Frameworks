class MoviesController < ApplicationController
  def index
  end

   def datatable
    render json: MovieDatatable.new(params, view_context: view_context)
  end
end
