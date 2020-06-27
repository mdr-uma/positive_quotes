class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :phrase, :category_id
  belongs_to :category
end
