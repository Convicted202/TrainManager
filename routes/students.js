var mongoose = require('mongoose'),
    Student  = require('../models/studentModel').Student;

// var Server  = mongo.Server,
//     Db      = mongo.Db,
//     BSON    = mongo.BSONPure;

var db,
    server,
    studentsToExp = {};

// server = new Server('localhost', 27017, {auto_reconnect: true});
// db = new Db('studentsTrainingDB', server, {safe: true});

mongoose.connect('mongodb://localhost/studentsTrainingDB');

// db.open(function(err, db) {
//     if(!err) {
//         console.log("Connected to 'studentsTrainingDB' database");
//         db.collection('students', {strict: true}, function(err, collection) {
//             if (err) {
//                 console.log("The 'students' collection doesn't exist. Creating it with sample data...");
//                 PopulateDB();
//             }

//             // collection.insert(student, {safe:true}, function(err, result) {
//             //     if (err) {
//             //         console.log('error occured');
//             //     } else {
//             //         console.log('everything okay');
//             //     }
//             // });
//         });
//     }
// });

db = mongoose.connection;

db.on('error', function() {
    console.error.bind(console, 'connection error:')
});

db.on('open', function (callback) {
    console.log('connected successfully');
    // Student.find(function(err, items) {
    //     if (!items.length) {
    //         PopulateDB();
    //     }
    // })


    // db.collectionNames(function (err, names) {
    //     console.log(names); // [{ name: 'dbname.myCollection' }]
    //     // module.exports.Collection = names;
    // });
    // console.log(db);
    // console.log(Student)
});

studentsToExp.retrieveAll = function(req, res) {
    // db.collection('students', function(err, collection) {
    //     collection.find().toArray(function(err, items) {
    //         res.send(items);
    //         console.log('everything retrieved well');
    //     });
    // });

    Student.find(function(err, items) {
        if (err) return console.error(err);

        res.send(items);
        console.log('everything retrieved well');
    });
};

studentsToExp.addNew = function(req, res) {
    stud = new Student(req.body);

    console.log(req);

    stud.save(function (err, fluffy) {
        if (err) {
            return console.error(err);
        } else {
            console.log('saved successfully');
        }

    })
}

exports.students = studentsToExp;

function PopulateDB() {
    var students = [
        {
            id: 0,
            addedOn: Date.now(),
            name: "John",
            lastname: "Smith",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 2,
            passportID: "01234567",
            coachName: "Peter Anderson",
            seminarCost: 0,
            certificationCost: 0
        },
        {
            id: 1,
            addedOn: Date.now(),
            name: "Adam",
            lastname: "Walls",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 3,
            passportID: "823414",
            coachName: "James Doe",
            seminarCost: 10,
            certificationCost: 20
        },
        {
            id: 2,
            addedOn: Date.now(),
            name: "Walt",
            lastname: "White",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 3,
            passportID: "052464326",
            coachName: "Radj Mutra",
            seminarCost: 100,
            certificationCost: 500
        },
        {
            id: 3,
            addedOn: Date.now(),
            name: "Steve",
            lastname: "Corolsen",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 4,
            passportID: "98780669",
            coachName: "Bob Martin",
            seminarCost: 80,
            certificationCost: 200
        },{
            id: 4,
            addedOn: Date.now(),
            name: "Laury",
            lastname: "Kripkovski",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 3,
            passportID: "23402999",
            coachName: "Norm Volacic",
            seminarCost: 1000,
            certificationCost: 2000
        },
        {
            id: 5,
            addedOn: Date.now(),
            name: "Robert",
            lastname: "Jakeson",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 2,
            passportID: "34677252",
            coachName: "Lloyd Freeks",
            seminarCost: 350,
            certificationCost: 800
        },{
            id: 6,
            addedOn: Date.now(),
            name: "Carl",
            lastname: "Bennette",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 4,
            passportID: "99867676",
            coachName: "Max Levitski",
            seminarCost: 90,
            certificationCost: 400
        },
        {
            id: 7,
            addedOn: Date.now(),
            name: "Abe",
            lastname: "Ricks",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 3,
            passportID: "2898734",
            coachName: "Albert Coffs",
            seminarCost: 400,
            certificationCost: 1500
        }
    ];

    // console.log(students.forEach);

    students.forEach(function(el) {
        var stud = new Student(el);
        stud.save(function(er) {
            console.log(er);
        })
    })

    // db.collection('students', function(err, collection) {
    //     collection.insert(students, {safe:true}, function(err, result) {});
    // });
}
