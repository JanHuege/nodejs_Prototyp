// Imports
var mongoose = require('mongoose');

// Aufbau von JSON Daten für Kunden
var ArtikelSchema = new mongoose.Schema({
    bezeichnung: String,
    anzahl: Number,
    rating: Number
});

// model an DB senden für JSON-Datensätze
module.exports = mongoose.model('Artikel', ArtikelSchema);
