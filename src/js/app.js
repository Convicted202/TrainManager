require([
    'jquery',
    'backbone',
    'router'
], function ($, Backbone, Router) {
    'use strict';

    console.log('we\'re inside of app');

    window.app = window.app || {};

    window.app.login = 'admin@www.com';
    window.app.password = 'qwerty123';

    $(function () {
        app.route = new Router();
        Backbone.history.start();
    });
});