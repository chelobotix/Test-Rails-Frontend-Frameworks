class MovieDatatable < ApplicationDatatable

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "Movie.id" },
      name: { source: "Movie.name", },
      year: { source: "Movie.year" }
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        name: record.name,
        year: record.year
      }
    end
  end

  def get_raw_records
    Movie.where("name LIKE ?", "%the%")
  end
end
