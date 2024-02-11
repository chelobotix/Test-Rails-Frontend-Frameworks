App.batepapo = App.cable.subscriptions.create "BatepapoChannel",
  connected: ->
    console.log("Welcome to o Bate Papo do Chelo")

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    $('#chat-box').append("<p>#{data.mensaje}</p>")
    scrollBotton()
