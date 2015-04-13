// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

//Definition RegExp Nachname
var re = new RegExp(/[A-Z���][a-z����]+(-[A-Z���][a-z����]+)?$/);

// Aufbau von JSON Daten f�r Kunden
var KundeSchema   = new mongoose.Schema({
  name: {type: String, validate: re },
  vorname: {type: String, validate: [validators.isAlpha()]},
  geschlecht: {type: String, enum: ['M', 'W']},
  alter: {type: Number, min: 18}
});

// Export the Mongoose model
module.exports = mongoose.model('Kunde', KundeSchema);