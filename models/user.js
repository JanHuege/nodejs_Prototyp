// Imports
var mongoose = require('mongoose');

// Aufbau von JSON Daten für Kunden
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// Export the Mongoose modelf
module.exports = mongoose.model('User', UserSchema);