class MessagesController < ApplicationController
  before_action :message_params

  def create
    message = current_user.messages.build(message_params)
    if message.save
      ActionCable.server.broadcast('bate_papo_do_chelo', mensaje: "#{message.user.name} said: #{message[:body]}")
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
