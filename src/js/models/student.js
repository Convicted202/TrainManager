define(['backbone'], function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            id: 0,
            name: "John",
            lastname: "Smith",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 2,
            passportID: "01234567",
            coachName: "Peter Anderson",
            seminarCost: 0,
            certificationCost: 0
        }
    });
});