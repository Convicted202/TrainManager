var express  = require('express'),
    path     = require('path'),
    http     = require('http'),
    training = require('./routes/students');

var app = express();

    app.set('port', process.env.PORT || 3000);
    // app.use(express.logger('dev'));
    // app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'src')));
    app.get('/hey', function(req, res) {
        res.send('hi there');
    });


    app.get('/students', training.students.retrieveAll);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
})