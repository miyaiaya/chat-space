
json.array! @new_message do |message|
    json.id         message.id
    json.body       message.body
    json.image      message.image.url
    json.name       message.user.name
    json.datetime   message.created_at
end
