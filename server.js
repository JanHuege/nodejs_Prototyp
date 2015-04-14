// Imports
//Proxy Test
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var kundeController = require('./controllers/kunderesource');
var userController = require('./controllers/userresource');
var artikelController = require('./controllers/artikelresource');

// DB Handle, mongoose = Wrapper für  mongo
mongoose.connect('mongodb://localhost:27017/kundenverwaltung');

// Express initiieren
var app = express();

// bodyParser für POST PUT 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Express Pfad
var router = express.Router();

// Pfad /kunden
router.route('/kunden')
    .post(kundeController.postKunden)
    .get(kundeController.getKunden);

//Pfad /kunden/:kunde_id
router.route('/kunden/:kunde_id')
    .get(kundeController.getKunde)
    .put(kundeController.putKunde)
    .delete(kundeController.deleteKunde);

//Pfad /kunden/user/:userId
router.route('/kunden/user/:userId')
    .get(kundeController.getKundeByUserId);

//Pfad /users
router.route('/users')
    .get(userController.getUsers)
    .post(userController.postUsers);

//Pfad /users/:user_id
router.route('/users/:user_id')
    .delete(userController.deleteUser);

// Pfad /artikelverwaltung
router.route('/artikelverwaltung')
    .post(artikelController.postArtikelverwaltung)
    .get(artikelController.getArtikelverwaltung);

//Pfad /artikelverwaltung/:artikel_id
router.route('/artikelverwaltung/:artikel_id')
    .get(artikelController.getArtikel)
    .put(artikelController.putArtikel)
    .delete(artikelController.deleteArtikel);

//Pfad /artikelverwaltung/name/:bezeichnung
router.route('/artikelverwaltung/name/:bezeichnung')
    .get(artikelController.getArtikelByBezeichnung);

//Html Seite mit get Text = "Hello world" als h1 Überschrift
app.get('/',function(req, res){
    res.send("<h1>Hello world.</h1>");
});

// app.use Block
// Pfade mit /api Basispfad bekannt machen
app.use('/api', router);

//Test Fehlerbehandlung mit express (immer als letztes Errorhandling laut doku)
//TODO klappt bei throw new Error() und allen anderen Fehlern in server.js sonst im Moment nicht
//TODO klappt sogar global, aber macht Probleme wenn eine Ressource schon gesendet wurde, da der HEader nichtmehr gesetzt werden kann
//app.use(function(err, req, res){
//   console.error(err.stack);
//    res.status(500).send('Something broke!');
//});

// Start server
app.listen(3000);
console.log('running on port 3000');