define([
    'backbone'
    ], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            email: 'admin@example.com',
            password: 'qwerty',
            admin: false
            // expirationDate: '0',
            // logged: false
        },

        url: '/api/authenticate',

        validate: function(attrs, options) {
            // if (!attrs.email.match(this.email) ||
            //     !attrs.password.match(this.password)) {
            //     return 'Email or Password is incorrect';
            // } else {
            //     attrs.logged = true;
            // }
        },

        auth: function() {
            this.save({}, {
                success: function(jqXHR) {
                    // console.log(jqXHR);
                    if (jqXHR.get('success')) {
                        window.sessionStorage['access-token'] = jqXHR.get('token');
                        Backbone.history.navigate('');
                        Backbone.history.loadUrl();
                    } else {
                        $.notify(jqXHR.get('message'), "error");
                    }
                }
            });
        },

        isExpired: function() {
            //return this.get('expirationDate') < Date.now();
        }
    });
});
