class MessagesController < ApplicationController
  before_action :set_group

 def index

 end

 def create
  @message = Message.create(message_params)
    if @message.save
      redirect_to root_path
    else
      notice 'メッセージを入力してください。'
    end
 end

 private
 def message_params
  params.require(:message).permit(:body, :image)
 end

 def set_group
   @group = Group.find(params[:group_id])
 end
end
