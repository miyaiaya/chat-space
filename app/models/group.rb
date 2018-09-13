class Group < ApplicationRecord
has_many :users, through: :members
has_many :messages
validates :name, presence: true

end
