// Imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validators = require('mongoose-validators');

//RegExp für Stadtnamen und Straßennamen
var reAdresse = new RegExp(/([A-ZÄÖÜ][a-zäöüß]+([- ][A-ZÄÖÜ][a-zäöüß]+)?)+$/);

// Aufbau von JSON Daten für Kunden
var AdresseSchema   = new mongoose.Schema({
    strasse: {type: String, validate: reAdresse},
    hausnummer: {type: Number, max: 999, validate: [validators.isInt()]},
    plz: {type: String, validate: /\d{5}/},
    stadt: {type: String, validate: reAdresse}
});

// Export the Mongoose model
module.exports = mongoose.model('Adresse', AdresseSchema);