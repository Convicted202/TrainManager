var express  = require('express'),
    path     = require('path'),
    http     = require('http'),
    students = require('./routes/students').students;

var app = express();

    app.set('port', process.env.PORT || 3000);
    // app.use(express.logger('dev'));
    // app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'src')));
    app.get('/hey', function(req, res) {
        res.send('hi there');
    });


    app.get('/students', students.retrieveAll);
    app.post('/students', students.addNew);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
})
