// Import model
var Kunde = require('../models/kunde');
var User = require('../models/user');

//TODO Anpassungen wegen ref User und ref in Model für Kunden verbessern
//POST
// Endpunkt erstellen /api/kunden
exports.postKunden = function (req, res) {
    // kunde Model Instanz erstellen
    var kunde = new Kunde();

    // Kunde Objekt Parameter setzen
    kunde.name = req.body.name;
    kunde.vorname = req.body.vorname;
    kunde.alter = req.body.alter;
    kunde.geschlecht = req.body.geschlecht;
    kunde.user = req.body.user;

    // Speichern und Fehlerbehandlung
    kunde.save(function (err) {
        if (err) {
            console.log("[INFO] Fehler beim speichern eines Kunden.\n"
                + "Name: "
                + req.body.name + "\n"
                + "Vorname: "
                + req.body.vorname + "\n"
                + "Geschlecht: "
                + req.body.geschlecht + "\n"
                + "Alter: "
                + req.body.alter
            );
            res.statusCode = 404;
            res.send(err);
        }
        else
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

//TODO laden von "UserObject" - done
//GET
// Endpunkt für einzelnen Kunden mit id /api/kunden/user/:userId
exports.getKundeByUserId = function (req, res) {
    // Kunde model verwenden um spezifischen Kunden anhand der userId zu finden
    Kunde.find({user: req.params.userId}, function (err, kunde) {
        if (err)
            res.send(err);
        var user = new User();
        Kunde.populate(kunde,{path: 'user'},function(err, user){
            res.json(kunde);
        });
        //res.json(kunde);
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
        if(req.body.alter != null)
            kunde.alter = req.body.alter;

        if(req.body.name != null)
            kunde.name = req.body.name;

        if(req.body.vorname != null)
            kunde.vorname = req.body.vorname;

        if(req.body.geschlecht != null)
            kunde.geschlecht = req.body.geschlecht;

        // Speichern und Fehlerbehandlung
        kunde.save(function (err) {
            if (err){
                res.send(err);
                console.log('[INFO] Fehler Put Kunde!');
            }
            else {
                res.json(kunde);
            }
        });
    });
};

//DELETE
// Endpunkt für löschen von speziellem Kunden mit{id} /api/kunden/:kunde_id
exports.deleteKunde = function (req, res) {
    // Kunde mit {id} suchen und löschen
    // Mit Test ob Kunde überhaupt vorhanden
    // TODO Bei allen anderen Ressource.js files auch anpassen
    Kunde.count({_id: req.params.kunde_id}, function (err, count){
        if(count == 0){
            res.json({ message: 'Kein Kunde mit dieser Id vorhanden!'})
        }
        else{
            Kunde.findByIdAndRemove(req.params.kunde_id, function (err) {
                if (err) {
                    res.send(err);
                }
                else{
                    res.json({ message: 'Kunde gelöscht!' });
                }
            });
        }
    });

};