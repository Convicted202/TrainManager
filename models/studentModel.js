var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var studentSchema = mongoose.Schema({
    addedOn: Date,
    name: String,
    lastname: String,
    birthdate: String,
    currentLevel: Number,
    currentLevelType: String,
    levelToAchieve: Number,
    levelType: String,
    passportID: String,
    coachName: String,
    seminarCost: Number,
    certificationCost: Number,
    attachedEvent: String
}, {
    collection: 'students'
});

module.exports.Student = mongoose.model('Student', studentSchema);
