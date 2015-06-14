var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var studentSchema = mongoose.Schema({
    addedOn: Date,
    name: String,
    lastname: String,
    birthdate: String,
    currentLevel: Number,
    levelToAchieve: Number,
    passportID: String,
    coachName: String,
    seminarCost: Number,
    certificationCost: Number
}, {
    collection: 'students'
});

module.exports.Student = mongoose.model('Student', studentSchema);
