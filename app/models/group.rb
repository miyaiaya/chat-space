class Group < ApplicationRecord
   has_many :members
   has_many :users, through: :members
   validates :name, presence: true
   has_many :messages

   def show_last_message
    if (last_message = messages.last).present?
     last_message.content? ? last_message.content
    else
     'まだメッセージはありません。'
    end
   end
end
