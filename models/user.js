// Imports
var mongoose = require('mongoose');
var validators = require('mongoose-validators');

// Aufbau von JSON Daten für USer
var UserSchema = new mongoose.Schema({
    username: {type: String, validate: [validators.isAlphanumeric()]},
    password: String,
    email: {type: String, validate: [validators.isEmail()]}
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);