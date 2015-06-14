define([
    'backbone',
    // 'backbone.localStorage'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            email: 'admin@example.com',
            password: 'qwerty',
            expirationDate: '0',
            logged: false
        },

        url: '/credentials',

        // localStorage : new Backbone.LocalStorage('cred'),

        validate: function(attrs, options) {
            if (!attrs.email.match(this.email) ||
                !attrs.password.match(this.password)) {
                return 'Email or Password is incorrect';
            } else {
                attrs.logged = true;
            }
        },

        isExpired: function() {
            return this.get('expirationDate') < Date.now();
        }
    });
});
