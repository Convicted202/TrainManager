var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = mongoose.Schema({
    eventID: Number,
    eventTitle: String,
    eventHeldDate: Date,
    eventCreatedDate: Date,
    notes: String
}, {
    collection: 'events'
});

module.exports.Event = mongoose.model('Event', eventSchema);
