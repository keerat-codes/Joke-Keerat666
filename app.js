const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8000;

require('dotenv').config();

const JokeRoute = require('./routes/Joke');
const Jokev4  = require('./controllers/Jokev4');
app.use('/jokev4', Jokev4);
app.use('Joke', JokeRoute);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;