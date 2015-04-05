// Import model
var Artikel = require('../models/artikel');

//POST
// Endpunkt erstellen /api/kunden
exports.postArtikelverwaltung  = function (req, res) {
    // kunde Model Instanz erstellen
    var artikel = new Artikel();

    // Kunde Objekt Parameter setzen
    artikel.bezeichnung = req.body.bezeichnung;
    artikel.anzahl = req.body.anzahl;

    if (req.body.rating == null) {
        artikel.rating = 0;
    }
    else
        artikel.rating = req.body.rating;

    // Speichern und Fehlerbehandlung
    artikel.save(function (err) {
        if (err) {
            console.log("[INFO] Fehler beim speichern eines Artikels.\n"
                        + "Bezeichnung: "
                        + req.body.bezeichnung + "\n"
                        + "Anzahl: "
                        + req.body.anzahl + "\n"
                        + "Rating: "
                        + artikel.rating
            );
            res.statusCode = 404;
            res.send(err);
        }
        else {
            res.json({message: 'Artikel in Artikelverwaltung aufgenommen!', data: artikel});
        }
    });
};

//GET
// Endpunkt erstellen /api/artikelverwaltung
exports.getArtikelverwaltung = function (req, res) {
    // Kunde model rufen um Kunden zu suchen .find()
    Artikel.find(function (err, artikelverwaltung) {
        if (err)
            res.send(err);

        res.json(artikelverwaltung);
    });
};

//GET
// Endpunkt für einzelnen Artikel mit id /api/artikelverwaltung/:artikel_id
exports.getArtikel = function (req, res) {
    // Kunde model verwenden um spezifischen Kunden anhand der Id zu finden
    Artikel.findById(req.params.artikel_id, function (err, artikel) {
        if (err){
            //res.send(err);
            res.status(404).send('Es gibt keinen Artikel mit der Id: ' + req.params.artikel_id);
        }
        else{
            res.json(artikel);
        }
    });
};

//PUT
// Endpunkt um Kunden zu aktualisieren(momentan nur alter) /api/kunden/:kunde_id
exports.putArtikel = function (req, res) {
    // Kunde mit {id} finden
    Artikel.findById(req.params.artikel_id, function (err, artikel) {
        if (err)
            res.send(err);

        // Update alter
        artikel.anzahl = req.body.anzahl;

        // Speichern und Fehlerbehandlung
        artikel.save(function (err) {
            if (err)
                res.send(err);

            res.json(artikel);
        });
    });
};

//DELETE
// Endpunkt für löschen von speziellem Kunden mit{id} /api/kunden/:kunde_id
exports.deleteArtikel = function (req, res) {
    // Kunde mit {id} suchen und löschen
    Artikel.findByIdAndRemove(req.params.artikel_id, function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Artikel gelöscht!' });
    });
};
