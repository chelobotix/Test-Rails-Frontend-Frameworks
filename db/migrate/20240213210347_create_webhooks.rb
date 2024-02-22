class CreateWebhooks < ActiveRecord::Migration[5.2]
  def change
    create_table :webhooks do |t|
      t.string :source
      t.jsonb :data
      t.string :message
      t.string :event

      t.timestamps
    end
  end
end
