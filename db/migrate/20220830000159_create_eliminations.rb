class CreateEliminations < ActiveRecord::Migration[5.2]
  def change
    create_table :eliminations do |t|
      t.string :platform, null: false
      t.string :region, null: false
      t.string :source_player_id, null: false
      t.string :source_player_character, null: false
      t.string :target_player_id, null: false
      t.string :target_character, null: false
      t.integer :damage, null: false

      t.timestamps
    end
  end
end
