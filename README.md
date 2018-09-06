# db設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|stiring|null: false|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|



## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false, foreign_key: true|




## messagesテーブル
## membersテーブル
