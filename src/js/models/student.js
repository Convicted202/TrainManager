define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({

        configs: {
            numberRegExp: /^[0-9]+$/
        },

        defaults: {
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

        validate: function(attrs, options) {
            var errorsArr = [];

            if (!attrs.passportID.match(this.configs.numberRegExp)) {
                errorsArr.push('Passport ID should be a number');
            }

            if (!attrs.levelToAchieve.match(this.configs.numberRegExp)) {
                errorsArr.push('Achievement level should be a number');
            }

            if (!attrs.seminarCost.match(this.configs.numberRegExp)) {
                errorsArr.push('Seminar payment should be a number');
            }

            if (!attrs.certificationCost.match(this.configs.numberRegExp)) {
                errorsArr.push('Certification payment should be a number');
            }

            if (errorsArr.length) {
                return errorsArr;
            }
        }
    });
});