const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
joke : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Joke', JokeSchema);