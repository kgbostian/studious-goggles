const { Chat, ChatEvents } = require("twitch-js");

// Provide your username and token secret keys from Server Control Panel (left).
// To generate tokens, use https://twitchtokengenerator.com.
const username = process.env.USERNAME;
const token = process.env.TOKEN;
const channel = process.env.CHANNEL;

const run = async () => {
  const chat = new Chat({
    username,
    token
  });

  await chat.connect();
  await chat.join(channel);

  // chat.on('PRIVMSG', message => {
  //   // Do stuff ...
  //   console.log("Testing");
  //   chat.say(channel, 'Kappa Keepo Kappa')
  // });

  const express = require('express')
  const app = express()
  const port = 13455
  var cors = require('cors')
  const bodyParser = require('body-parser');

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Got a get");
  })

  app.post('/', (req, res) => {
    res.send('Got a POST request');
    console.log("Responding to post.");
    console.log("Got body:", req.body);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)  
  })

};

run();

const express = require('express')
const app = express()
const port = 13455
var cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("Got a get");
})

app.post('/', (req, res) => {
    res.send('Got a POST request');
    console.log("Responding to post");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})