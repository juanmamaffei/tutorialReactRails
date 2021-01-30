class CreateEpisodes < ActiveRecord::Migration[6.1]
  def change
    create_table :episodes do |t|
      t.string :title
      t.string :description
      t.string :url
      t.belongs_to :section

      t.timestamps
    end
  end
end
