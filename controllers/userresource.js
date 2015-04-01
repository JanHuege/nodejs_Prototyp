var User = require('../models/user');

// POST
exports.postUsers = function (req, res) {
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Neuer User registriert!', data: user });
    });
};

// GET
exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};

// DELETE
exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.user_id, function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'User gelöscht!' });
    });
};