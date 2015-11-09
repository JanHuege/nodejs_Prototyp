// Imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TODO Validationmessages
//TODO UTF-8 wegen ���
var reNachname = new RegExp(/[A-Z���][a-z����]+(-[A-Z���][a-z����]+)?$/);
var reVorname = new RegExp(/([A-Z���][a-z����]+([- ][A-Z���][a-z����]+)?)+$/);

// Aufbau von JSON Daten f�r Kunden
var KundeSchema   = new mongoose.Schema({
  name: {type: String, validate: reNachname },
  vorname: {type: String, validate: reVorname},
  geschlecht: {type: String, enum: ['M', 'W']},
  alter: {type: Number, min: 18},
  user: {type: Schema.ObjectId, ref: 'User', required: false},
  adresse:{type: Schema.ObjectId, ref: 'Adresse', required: false}
});

// Export the Mongoose model
module.exports = mongoose.model('Kunde', KundeSchema);

