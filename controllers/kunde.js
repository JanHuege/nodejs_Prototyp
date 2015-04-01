// Import model
var Kunde = require('../models/kunde');

//POST
// Endpunkt erstellen /api/kunden
exports.postKunden = function (req, res) {
    // kunde Model Instanz erstellen
    var kunde = new Kunde();

    // Kunde Objekt Parameter setzen
    kunde.name = req.body.name;
    kunde.vorname = req.body.vorname;
    kunde.alter = req.body.alter;

    // Speichern und Fehlerbehandlung
    kunde.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Kunde in Kundenverwaltung aufgenommen!', data: kunde });
    });
};

//GET
// Endpunkt erstellen /api/kunden
exports.getKunden = function (req, res) {
    // Kunde model rufen um Kunden zu suchen .find()
    Kunde.find(function (err, kunden) {
        if (err)
            res.send(err);

        res.json(kunden);
    });
};

//GET
// Endpunkt für einzelnen Kunden mit id /api/kunden/:kunde_id
exports.getKunde = function (req, res) {
    // Kunde model verwenden um spezifischen Kunden anhand der Id zu finden
    Kunde.findById(req.params.kunde_id, function (err, kunde) {
        if (err)
            res.send(err);

        res.json(kunde);
    });
};

//PUT
// Endpunkt um Kunden zu aktualisieren(momentan nur alter) /api/kunden/:kunde_id
exports.putKunde = function (req, res) {
    // Kunde mit {id} finden
    Kunde.findById(req.params.kunde_id, function (err, kunde) {
        if (err)
            res.send(err);

        // Update alter
        kunde.alter = req.body.alter;

        // Speichern und Fehlerbehandlung
        kunde.save(function (err) {
            if (err)
                res.send(err);

            res.json(kunde);
        });
    });
};

//DELETE
// Endpunkt für löschen von speziellem Kunden mit{id} /api/kunden/:kunde_id
exports.deleteKunde = function (req, res) {
    // Kunde mit {id} suchen und löschen
    Kunde.findByIdAndRemove(req.params.kunde_id, function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Kunde gelöscht!' });
    });
};