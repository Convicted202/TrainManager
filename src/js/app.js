require([
    'jquery',
    'backbone',
    'router'
], function ($, Backbone, Router) {
    'use strict';

    console.log('we\'re inside of app');

    window.app = window.app || {};

    $(function () {
        app.route = new Router();
        Backbone.history.start();
    });
});