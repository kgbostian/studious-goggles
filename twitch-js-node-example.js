const { Chat, ChatEvents } = require("twitch-js");

// Provide your username and token secret keys from Server Control Panel (left).
// To generate tokens, use https://twitchtokengenerator.com.
const username = process.env.USERNAME;
const token = process.env.TOKEN;
const channel = process.env.CHANNEL;

const express = require('express')
const app = express()
const port = 13455
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    respondChat(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})

const chat = new Chat({
  username,
  token
});

function respondChat(diceValue) {
  chat.say(channel,'Result was ' + diceValue);
}
const run = async () => {
  await chat.connect();
  await chat.join(channel);


  // chat.on('PRIVMSG', message => {
  //   // Do stuff ...
  //   console.log("Testing");
  //   chat.say(channel, 'Kappa Keepo Kappa')
  // });

};

run();
