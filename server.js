var express  = require('express'),
    bodyParser = require('body-parser'),
    path     = require('path'),
    http     = require('http'),
    students = require('./routes/students').students;

var app = express(),
    environment;

    app.set('port', process.env.PORT || 3000);

    environment = process.env.NAME || 'src';

    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.use(express.static(path.join(__dirname, environment)));

    app.get('/hey', function(req, res) {
        res.send('hi there');
    });

    console.log(process.env.name);

    app.get('/students', students.retrieveAll);
    app.post('/students', students.addNew);
    app.put('/students/:id', students.updateByID);
    app.delete('/students/:id', students.deleteByID);

    app.get('/preferences', function(req, res) {
        res.send({
            email: 'admin@example.com',
            lang: 'uk',
            langString: 'Українська'
        });
    })

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
