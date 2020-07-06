class Quote < ApplicationRecord
    belongs_to :category
    validates :phrase, presence: true, uniqueness: true 
end
