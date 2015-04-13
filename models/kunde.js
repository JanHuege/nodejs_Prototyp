// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

//TODO UTF-8 wegen äöü
//Definition RegExp Nachname
var reNachname = new RegExp(/[A-ZÄÖÜ][a-zäöüß]+(-[A-ZÄÖÜ][a-zäöüß]+)?$/);
var reVorname = new RegExp(/([A-ZÄÖÜ][a-zäöüß]+([- ][A-ZÄÖÜ][a-zäöüß]+)?)+$/);

// Aufbau von JSON Daten für Kunden
var KundeSchema   = new mongoose.Schema({
  name: {type: String, validate: reNachname },
  vorname: {type: String, validate: reVorname},
  geschlecht: {type: String, enum: ['M', 'W']},
  alter: {type: Number, min: 18}
});

// Export the Mongoose model
module.exports = mongoose.model('Kunde', KundeSchema);