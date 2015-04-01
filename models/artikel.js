// Imports
var mongoose = require('mongoose');

// Aufbau von JSON Daten f�r Kunden
var ArtikelSchema = new mongoose.Schema({
    bezeichnung: String,
    anzahl: Number,
    rating: Number
});

// model an DB senden f�r JSON-Datens�tze
module.exports = mongoose.model('Artikel', ArtikelSchema);
