// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

//TODO UTF-8 wegen ���
//Definition RegExp Nachname
var reNachname = new RegExp(/[A-Z���][a-z����]+(-[A-Z���][a-z����]+)?$/);
var reVorname = new RegExp(/([A-Z���][a-z����]+([- ][A-Z���][a-z����]+)?)+$/);

// Aufbau von JSON Daten f�r Kunden
var KundeSchema   = new mongoose.Schema({
  name: {type: String, validate: reNachname },
  vorname: {type: String, validate: reVorname},
  geschlecht: {type: String, enum: ['M', 'W']},
  alter: {type: Number, min: 18}
});

// Export the Mongoose model
module.exports = mongoose.model('Kunde', KundeSchema);