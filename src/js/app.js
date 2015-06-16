require([
    'jquery',
    'backbone',
    'router'
], function ($, Backbone, Router) {
    'use strict';

    console.log('we\'re inside of app');

    window.app = window.app || {};

    app.getAuthToken = function() {
        sessionStorage = window.sessionStorage;
        if (!sessionStorage) {
            console.error('Cannot get token: no sessionStorage found');
            return null;
        }

        return sessionStorage['access-token'];
    }

    $(function () {
        app.route = new Router();
        Backbone.history.start();
    });
});