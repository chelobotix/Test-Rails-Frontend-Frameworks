class MusicAlbumsController < ApplicationController
  def index
  end

  def datatable
    render json: MusicAlbumDatatable.new(params, view_context: view_context)
  end

end
