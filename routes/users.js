var jwt  = require('jsonwebtoken'),
    User = require('../models/moderatorModel').User;

var usersToExp = {}
    secret = 'qwerty1qwerty';

usersToExp.setupFirstUser = function(req, res) {
    // create a sample user
    var setupUser = new User({
        email: 'alex@admin.com',
        password: 'password',
        admin: true
    });

    // save the sample user
    setupUser.save(function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('User saved successfully');
        res.json({ success: true });
    });
}

usersToExp.getAllUsers = function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            return console.log(err);
        }

        res.json(users);
    });
}

usersToExp.authenticate = function(req, res) {
    var token;

    // find the user
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            return console.log(err);
        }

        if (!user) {
            console.log(req.body.email);

            res.json({
                success: false,
                message: 'User not found.'
            });
        } else {
            // check if password matches
            if (user.password !== req.body.password) {
                res.json({
                    success: false,
                    message: 'Wrong password.'
                });
            } else {
                // credentials are okay: create a token
                token = jwt.sign(user, secret, {
                    // expires in 24 hours
                    expiresInMinutes: 1440
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Authentication passed',
                    token: token
                });
            }
        }
    });
}

exports.users = usersToExp;
