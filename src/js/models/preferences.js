define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            email: 'admin@example.com',
            lang: 'en',
            langString: 'English'
        },


        url: '/preferences',

        validate: function(attrs, options) {

        }
    });
});