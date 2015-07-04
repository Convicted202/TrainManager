define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({

        configs: {
            numberRegExp: /^[0-9]+$/
        },

        urlRoot: '/students',

        idAttribute: '_id',

        defaults: {
            _id: null,
            addedOn: Date.now(),
            name: "John",
            lastname: "Smith",
            birthdate: "01/01/1991",
            currentLevel: undefined,
            levelToAchieve: 2,
            passportID: "01234567",
            coachName: "Peter Anderson",
            seminarCost: 0,
            certificationCost: 0,
            attachedEvent: '-1',
            currentLevel: undefined
        },

        validate: function(attrs, options) {
            var errorsArr = [];

            if (!this.configs.numberRegExp.test(attrs.passportID)) {
                errorsArr.push('Passport ID should be a number');
            }

            if (!this.configs.numberRegExp.test(attrs.levelToAchieve)) {
                errorsArr.push('Achievement level should be a number');
            }

            if (!this.configs.numberRegExp.test(attrs.seminarCost) && attrs.seminarCost) {
                errorsArr.push('Seminar payment should be a number');
            }

            if (!this.configs.numberRegExp.test(attrs.certificationCost) && attrs.certificationCost) {
                errorsArr.push('Certification payment should be a number');
            }

            if (errorsArr.length) {
                return errorsArr;
            }
        }
    });
});
