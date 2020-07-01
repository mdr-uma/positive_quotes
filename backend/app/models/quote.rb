class Quote < ApplicationRecord
    belongs_to :category
    validates :phrase, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z\s]+\z/, message: "only allows letters" }  
end
