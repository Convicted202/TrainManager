define([
    'jquery',
    'underscore',
    'backbone',
    'models/student',
    'views/createUpdateStudentView',
    'views/mainPanelView'
    ], function($, _, Backbone, Student, CreateUpdateView, MainPanelView) {


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
        }
    });

    var Renderer = new function () {

        this.mainModel = null,

        this.initialize = function() {

        },

        this.fetchMain = function() {

            // this.mainModel = new MainModel();

            // this.mainModel.fetch();
        },

        this.main = function () {
            // console.log('main page');

            // Renderer.fetchMain();
            return new MainPanelView().render(CreateUpdateView);
            // return new CreateUpdateView().render();
        },

        this.review = function(query) {

        },

        this.reports = function() {

        }
    }

    return Backbone.Router.extend({

        initialize: function () {

        },

        routes: {
            "":                 Renderer.main,         // '/'' or '/#'
            "blankEntry":       Renderer.main,        // '/#main'
            "review/:query":    Renderer.review,        // '/#box/(query)
            "reports":          Renderer.reports,    // '/#fruits/(query)
        }
    });
});