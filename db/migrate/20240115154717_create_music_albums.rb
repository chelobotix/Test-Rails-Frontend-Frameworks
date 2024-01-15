class CreateMusicAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :music_albums do |t|
      t.string :title
      t.string :genre
      t.integer :tracks
      t.date :date_of_released
      t.string :country
      t.string :tag

      t.timestamps
    end
  end
end
