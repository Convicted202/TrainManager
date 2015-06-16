define([
    'jquery',
    'underscore',
    'backbone',
    'models/student',
    'models/userCredentials',
    'models/preferences',
    'views/createUpdateStudentView',
    'views/reviewView',
    'views/reportView',
    'views/mainPanelView',
    'views/preferencesView',
    'views/loginView',
    'collections/students-collection'
    ], function($, _, Backbone, Student, CredModel, PreferencesModel, CreateUpdateView, ReviewView, ReportView, MainPanelView, PreferencesView, LoginView, StudentsCollection) {


    /*  Defining main areas from index.html
        to have access to them from within all project
        via Backbone object
    */
    _.extend(Backbone, {
        areas: {
            appContainer: '#app-container',
            panel: '#main-panel',
            panelNav: '#panel-heading',
            panelContent: '#panel-content'
        },

        getLang: function() {
            var model = new PreferencesModel();
            model.fetch();
            return model.get('lang').toLowerCase();
        }
    });

    var backboneSync = Backbone.sync

    Backbone.sync = function (method, model, options) {
        var token = window.sessionStorage['access-token'];

        if (token) {
            options.headers = {
                'x-access-token': token
            }
        }

        options.error = function(xhr) {
            console.log('backbone send error');

            window.location.hash = '#login';

            return false;
        }

        // call the original function
        backboneSync(method, model, options);
    };

    var Renderer = new function () {

        this.mainModel = null,

        this.initialize = function() {
            StudentsCollection.fetch();
        },

        this.login = function() {
            return new LoginView().render();
        },

        this.main = function () {
            return new MainPanelView().render(CreateUpdateView, 'CreateUpdateView');
        },

        this.review = function(query) {
            return new MainPanelView().render(ReviewView, 'ReviewView');
        },

        this.reports = function() {
            return new MainPanelView().render(ReportView, 'ReportView');
        },

        this.preferences = function() {
            return new MainPanelView().render(PreferencesView, 'PreferencesView');
        }
    }

    return Backbone.Router.extend({

        initialize: function () {

        },

        routes: {
            "login":            Renderer.login,
            "":                 Renderer.main,         // '/'' or '/#'
            "blankEntry":       Renderer.main,        // '/#main'
            "review":           Renderer.review,        // '/#box/(query)
            "reports":          Renderer.reports,    // '/#fruits/(query)
            "preferences":      Renderer.preferences
        }
    });
});