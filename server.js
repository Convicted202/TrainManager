var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    http        = require('http'),
    mongoose    = require('mongoose'),
    jwt         = require('jsonwebtoken'),
    students    = require('./routes/students').students,
    users       = require('./routes/users').users,
    events      = require('./routes/events').events;

var app = express(),
    environment,
    db;

    app.set('port', process.env.PORT || 3000);
    app.set('_secret_', 'qwerty1qwerty');

    environment = process.env.NAME || 'src';

    app.use(bodyParser.json({ limit: '50mb' }));       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        limit: '50mb',
        extended: true
    }));

    app.use(express.static(path.join(__dirname, environment)));

    mongoose.connect('mongodb://localhost/studentsTrainingDB');

    db = mongoose.connection;

    db.on('error', function() {
        console.error.bind(console, 'connection error:')
    });

    db.on('open', function (callback) {
        console.log('connected successfully');
    });

    app.post('/preferences/upload', students.loadFromXLS);

    app.get('/students/grouped/:id', students.retrievePaidGroupedByEvent);

    app.post('/api/authenticate', users.authenticate);

    app.use(function(req, res, next) {
        // check header or url for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('_secret_'), function(err, decoded) {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token authentication failed.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(401).send({
                success: false,
                message: 'No token provided.'
            });

        }
    });

    console.log(process.env.name);

    app.get('/students', students.retrieveAll);

    app.post('/students', students.addNew);
    app.put('/students/:id', students.updateByID);
    app.delete('/students/:id', students.deleteByID);

    app.get('/students/grouped', students.retrievePaidGrouped);


    app.get('/api/users/setup', users.setupFirstUser);
    app.get('/api/users', users.getAllUsers);
    app.get('/api', function(req, res) {
        res.json({ message: 'API main page' });
    });

    app.get('/events/fake', events.setupFakeEvents);
    app.get('/events', events.retrieveAll);
    app.post('/events', events.addNew);

    app.get('/preferences', function(req, res) {
        res.send({
            email: 'admin@example.com',
            lang: 'uk',
            langString: 'Українська'
        });
    });

    app.post('/credentials', function(req, res) {
        res.send({
            email: 'admin@www.com',
            password: 'qwerty123',
            expirationDate: '0',
            logged: true
        });
    })


http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
})
