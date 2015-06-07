define([
    'backbone',
    'backbone.localStorage'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: 0,
            email: 'admin@example.com',
            lang: 'en',
            langString: 'English'
        },

        localStorage : new Backbone.LocalStorage('preferences'),

        validate: function(attrs, options) {

        }
    });
});