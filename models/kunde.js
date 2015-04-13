// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

// Aufbau von JSON Daten für Kunden
var KundeSchema   = new mongoose.Schema({
  name: String,
  vorname: {type: String, validate: [validators.isAlpha()]},
  alter: {type: Number, min: 0}
});

// Export the Mongoose modelf
module.exports = mongoose.model('Kunde', KundeSchema);