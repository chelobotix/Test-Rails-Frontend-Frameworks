class MusicAlbumDatatable < ApplicationDatatable

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "MusicAlbum.id" },
      title: { source: "MusicAlbum.title" },
      genre: { source: "MusicAlbum.genre" },
      tracks: { source: "MusicAlbum.tracks" },
      date_of_released: { source: "MusicAlbum.date_of_released" },
      country: { source: "MusicAlbum.country" },
      tag: { source: "MusicAlbum.tag" },
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        title: record.title,
        genre: record.genre,
        tracks: record.tracks,
        date_of_released: record.date_of_released,
        country: record.country,
        tag: record.tag
      }
    end
  end

  def get_raw_records
    MusicAlbum.all
  end

end
