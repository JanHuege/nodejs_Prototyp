// Imports
var mongoose = require('mongoose');

// Aufbau von JSON Daten f�r Kunden
var KundeSchema   = new mongoose.Schema({
  name: String,
  vorname: String,
  alter: Number
});

// Export the Mongoose modelf
module.exports = mongoose.model('Kunde', KundeSchema);