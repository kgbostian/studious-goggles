# from twisted.internet import reactor
# from autobahn.twisted.websocket import WebSocketClientFactory, WebSocketClientProtocol, connectWS

# class EchoClientProtocol(WebSocketClientProtocol):

#    def PONG(self):
#       self.sendMessage("PONG :tmi.twitch.tv")

#    def onOpen(self):
#       self.PONG()

#    def onMessage(self, msg, binary):
#       print( "Got echo: " + msg)
#       reacter.callLater(1, self.PONG)


# if __name__ == '__main__':

#    factory = WebSocketClientFactory("ws://irc-ws.chat.twitch.tv:80")
#    factory.protocol = EchoClientProtocol
#    connectWS(factory)
#    reactor.run()

#***************************************************************************************
import websocket
import os

def on_message(ws, message):
    print(message)
    if("PING" in message):
        PONG(ws, message)
    

def PONG(ws, message):
    ws.send(message.replace("PING", "PONG"))

def on_error(ws, error):
    print(error)

def on_close(ws, close_status_code, close_msg):
    print("### closed ###")

def on_open(ws):
    print("Opened connection")
    channel = '#' + os.getenv("CHANNEL")
    account = os.getenv("USERNAME")
    password = 'oauth:' + os.getenv("OAUTH_ID")
    ws.send("PASS " + password)
    ws.send("NICK " + account)
    ws.send('PRIVMSG ' + channel + ' :Get up and move, your body will thank you!')
    

websocket.enableTrace(True)
ws = websocket.WebSocketApp("ws://irc-ws.chat.twitch.tv:80",
                            on_message = on_message,
                            on_error = on_error,
                            on_close = on_close)
ws.on_open = on_open

ws.run_forever()
