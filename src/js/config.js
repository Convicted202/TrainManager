var require = {
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        underscore: 'vendor/underscore-amd/underscore-min',
        backbone: 'vendor/backbone-amd/backbone',
        pikaday: 'vendor/pikaday/pikaday',
        text: 'vendor/requirejs-text/text',
        json: 'vendor/requirejs-plugins/src/json',
        templates: '../templates',
        langs: '../langs/langs',
        // 'backbone.localStorage' : 'vendor/Backbone.localStorage/backbone.localStorage',
        stickyHeaders: 'vendor/StickyTableHeaders/js/jquery.stickytableheaders.min',
        notify: 'vendor/notifyjs/dist/notify.min',
        'dropdown.bootstrap': 'vendor/bootstrap/js/dropdown',
        chartist: 'vendor/chartist/dist/chartist.min',
        // chart: 'vendor/chartjs/Chart.min',
        'tooltip': 'vendor/chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min'
    },
    shim : {
        'underscore' : {
            exports : '_'
        },
        'jquery' : {
            exports : '$'
        },
        'backbone' : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        // 'backbone.localStorage' : ['backbone'],
        'stickyHeaders': ['jquery'],
        'notify': ['jquery'],
        'dropdown.bootstrap': ['jquery'],
        'tooltip': ['chartist']
    }
};