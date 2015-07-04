var Student  = require('../models/studentModel').Student,
    XLSX = require('xlsx');

var studentsToExp = {};

studentsToExp.retrieveAll = function(req, res) {
    Student.find(function(err, items) {
        if (err) {
            return console.error(err);
        } else {
            res.json(items);
            console.log('Retreived successfully');
        }
    });
};

studentsToExp.loadFromXLS = function(req, res) {
    // var data = new Uint8Array(req.body);
    // console.log(data);
    console.log(req.body);
    // data = convert(req.body);

    // var workbook = XLSX.read(data, {type: 'binary'});

    // console.log(workbook);
};

studentsToExp.retrievePaidGrouped = function(req, res) {
    var nonEmptyQuery =
            Student.find().
                where('seminarCost').ne('').
                where('certificationCost').ne('');

    nonEmptyQuery.
        where({ 'levelType': 'Q' }).
        sort({ 'levelToAchieve': -1 }).
        exec(function(err, items) {
            if (err) {
                return console.log(err);
            }
            nonEmptyQuery.
                where({ 'levelType': 'D' }).
                sort({ 'levelToAchieve': 1 }).
                exec(function(otherErr, otherItems) {
                    if (otherErr) {
                        return console.log(otherErr);
                    }
                    var result = items.concat(otherItems),
                        grouped = {};

                    result.forEach(function(v, k) {
                        var st = v.levelToAchieve + ' ' + v.levelType
                        if (!grouped[st]) {
                            grouped[st] = [];
                        }
                        grouped[st].push(v);
                    });

                    res.json(grouped);
                    console.log('Retreived successfully');
                });
        });
};

studentsToExp.retrievePaidGroupedByEvent = function(req, res) {
    var id = req.params.id,

        nonEmptyQuery =
            Student.find({ 'attachedEvent': id }).
                where('seminarCost').ne('').
                where('certificationCost').ne('');

    nonEmptyQuery.
        where({ 'levelType': 'Q' }).
        sort({ 'levelToAchieve': -1 }).
        exec(function(err, items) {
            if (err) {
                return console.log(err);
            }
            nonEmptyQuery.
                where({ 'levelType': 'D' }).
                sort({ 'levelToAchieve': 1 }).
                exec(function(otherErr, otherItems) {
                    if (otherErr) {
                        return console.log(otherErr);
                    }
                    var result = items.concat(otherItems),
                        grouped = {};

                    result.forEach(function(v, k) {
                        var st = v.levelToAchieve + ' ' + v.levelType
                        if (!grouped[st]) {
                            grouped[st] = [];
                        }
                        grouped[st].push(v);
                    });

                    res.json(grouped);
                    console.log('Retreived successfully');
                });
        });
}

studentsToExp.addNew = function(req, res) {
    stud = new Student(req.body);

    stud.save(function (err, student) {
        if (err) {
            return console.error(err);
        } else {
            res.status(200).json(student);
            console.log('Saved successfully');
        }
    });
};

studentsToExp.updateByID = function(req, res) {
    var id = req.params.id,
        student = req.body;

    delete student._id;

    Student.update({ _id: id }, student, {upsert: true}, function(err, el) {
        if (!err) {
            res.status(200).json(el);
            console.log('User: ' + id + ' updated successfully');
        } else {
            return console.log(err);
        }
    });
};

studentsToExp.deleteByID = function(req, res) {
    var id = req.params.id;

    Student.remove({ _id: id }, function(err, el) {
        if (!err) {
            res.status(200).json(el);
            console.log('User: ' + id + ' deleted successfully');
        } else {
            return console.log(err);
        }
    });
}

exports.students = studentsToExp;

function PopulateDB() {
    var students = [
        {
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
