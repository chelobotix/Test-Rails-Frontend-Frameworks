class BatepapoChannel < ApplicationCable::Channel
  def subscribed
    stream_from('bate_papo_do_chelo')
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak; end
end
