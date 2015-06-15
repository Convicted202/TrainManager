var require = {
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        underscore: 'vendor/underscore-amd/underscore-min',
        backbone: 'vendor/backbone-amd/backbone-min',
        pikaday: 'vendor/pikaday/pikaday',
        text: 'vendor/requirejs-text/text',
        json: 'vendor/requirejs-plugins/src/json',
        templates: '../templates',
        langs: '../langs/langs',
        stickyHeaders: 'vendor/StickyTableHeaders/js/jquery.stickytableheaders.min',
        notify: 'vendor/notifyjs/dist/notify-combined.min',
        'dropdown.bootstrap': 'vendor/bootstrap/js/dropdown',
        chartist: 'vendor/chartist/dist/chartist.min',
        tooltip: 'vendor/chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min'
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
        'stickyHeaders': ['jquery'],
        'notify': ['jquery'],
        'dropdown.bootstrap': ['jquery'],
        'tooltip': ['chartist']
    }
};