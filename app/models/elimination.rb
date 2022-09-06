class Elimination < ApplicationRecord
    validates :platform, :region, :source_player_id, :source_player_character, :target_player_id, :target_character, pressense: true 
end
