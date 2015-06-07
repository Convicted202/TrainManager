define([
    'backbone',
    'backbone.localStorage'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: 0,
            email: 'admin@example.com',
            password: 'qwerty',
            expirationDate: '0',
            logged: false
        },

        localStorage : new Backbone.LocalStorage('cred'),

        validate: function(attrs, options) {
            if (!attrs.email.match(window.app.login) ||
                !attrs.password.match(window.app.password)) {
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