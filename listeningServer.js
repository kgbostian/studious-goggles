const express = require('express')
const app = express()
const port = 13455
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("Got a get");
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request');
//   console.log("Responding to post.");
//   console.log("Got body:", req.body);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})