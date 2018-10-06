json.array! @messages do |message|
  json.body message.body
  json.image message.image.url
  json.name message.user.name
  json.created_at message.created_at
  json.id message.id
end
