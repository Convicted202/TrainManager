var Event = require('../models/eventModel').Event;

var eventsToExp = {};

eventsToExp.setupFakeEvents = function(req, res) {
    // save the sample event
    PopulateDB();
    res.status(200).json({ success: true });
}

eventsToExp.retrieveAll = function(req, res) {
    Event.find({}, function(err, events) {
        if (err) {
            return console.log(err);
        }

        res.json(events);
    });
}

eventsToExp.addNew = function(req, res) {
    var evt = new Event(req.body);

    evt.save(function(err) {
        if (err) {
            return console.log(err);
        }

        res.status(200).json({ success: true });
    })
}

exports.events = eventsToExp;

function PopulateDB() {
    var events = [
        {
            eventID: 0,
            eventTitle: 'Super Cool championship',
            eventHeldDate: '01/01/2016',
            eventCreatedDate: Date.now()
        },
        {
            eventID: 1,
            eventTitle: 'Karate champtionship',
            eventHeldDate: '08/01/2018',
            eventCreatedDate: Date.now()
        },
        {
            eventID: 2,
            eventTitle: 'Karate finals',
            eventHeldDate: '04/17/2017',
            eventCreatedDate: Date.now()
        }
    ];

    events.forEach(function(el) {
        var evt = new Event(el);
        // console.log(evt);

        evt.save(function(err) {
            if (err) {
                return console.log(err);
            }

            console.log('User saved successfully');
        });
    });
}
