// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

// Aufbau von JSON Daten f�r Kunden
var ArtikelSchema = new mongoose.Schema({
    bezeichnung: String,
    anzahl: {type: Number, min: 0, validate: [validators.isInt()]},
    rating: {type: Number, min:0, max:10}
});

// model an DB senden f�r JSON-Datens�tze
module.exports = mongoose.model('Artikel', ArtikelSchema);