// Imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var kundeController = require('./controllers/kunde');
var userController = require('./controllers/user');

// DB Handle
mongoose.connect('mongodb://localhost:27017/kundenverwaltung');

// Express initiieren
var app = express();

// bodyParser für POST PUT 
app.use(bodyParser.urlencoded({
  extended: true
}));

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

//Pfad /users
router.route('/users')
    .get(userController.getUsers)
    .post(userController.postUsers);

//Pfad /users/:user_id
router.route('/users/:user_id')
    .delete(userController.deleteUser);

// Pfade mit /api Basispfad bekannt machen
app.use('/api', router);

// Start server
app.listen(3000);

