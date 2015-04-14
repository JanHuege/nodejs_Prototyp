// Imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validators = require('mongoose-validators');

//RegExp f�r Stadtnamen und Stra�ennamen
var reAdresse = new RegExp(/([A-Z���][a-z����]+([- ][A-Z���][a-z����]+)?)+$/);

// Aufbau von JSON Daten f�r Kunden
var AdresseSchema   = new mongoose.Schema({
    strasse: {type: String, validate: reAdresse},
    hausnummer: {type: Number, max: 999, validate: [validators.isInt()]},
    plz: {type: String, validate: /\d{5}/},
    stadt: {type: String, validate: reAdresse}
});

// Export the Mongoose model
module.exports = mongoose.model('Adresse', AdresseSchema);