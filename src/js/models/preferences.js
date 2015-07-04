define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            lang: 'uk',
            langString: 'Українська'
        },

        url: '/preferences',

        validate: function(attrs, options) {

        }
    });
});