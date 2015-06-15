var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var moderatorSchema = mongoose.Schema({
    email: String,
    password: String,
    admin: Boolean,
}, {
    collection: 'users'
});

module.exports.User = mongoose.model('User', moderatorSchema);
