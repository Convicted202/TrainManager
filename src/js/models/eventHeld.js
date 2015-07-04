define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({

        urlRoot: '/events',

        idAttribute: '_id',

        defaults: {
            _id: null,
            addedOn: Date.now()
        },

        validate: function(attrs, options) {
            var errorsArr = [];

            if (!attrs.eventHeldDate || (new Date(attrs.eventHeldDate) === 'Invalid Date')) {
                errorsArr.push('Held Date should be a Date');
            }

            if (errorsArr.length) {
                return errorsArr;
            }
        }
    });
});
