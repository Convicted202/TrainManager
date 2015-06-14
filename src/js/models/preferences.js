define([
    'backbone',
    // 'backbone.localStorage'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            email: 'admin@example.com',
            lang: 'en',
            langString: 'English'
        },


        url: '/preferences',
        // localStorage : new Backbone.LocalStorage('preferences'),

        validate: function(attrs, options) {

        }
    });
});