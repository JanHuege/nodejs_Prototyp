// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

// Aufbau von JSON Daten für Kunden
var UserSchema = new mongoose.Schema({
    username: {type: String, validate: [validators.isAlphanumeric()]},
    password: String,
    email: {type: String, validate: [validators.isEmail()]}
});

// Export the Mongoose modelf
module.exports = mongoose.model('User', UserSchema);