const tmi = require('tmi.js');

username_id = process.env.USERNAME;
channel_id = username_id;
oauth_id = process.env.OAUTH_ID;

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: `${username_id}`,
		password: `oauth:${oauth_id}`
	},
	channels: [ `${channel_id}` ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});


// ************************************************************************************************************
// Listening Server
// ************************************************************************************************************
const express = require('express')
const app = express()
const port = <PORT_NUMBER>
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    sumDiceAndPost(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})

function sumDiceAndPost(diceValue) {
  total = diceValue.reduce((a, b) => a + b, 0)
  client.say(channel_id,'Result was ' + total);
}

// ************************************************************************************************************
// End Listening Server
// ************************************************************************************************************