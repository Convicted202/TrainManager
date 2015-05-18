define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/mainPanel.tpl',
    'views/createUpdateStudentView',
    'views/reviewView',
    'views/reportView'
], function(_, $, Backbone, Template, CreateUpdateView, ReviewView, ReportView){
    'use strict';

    return Backbone.View.extend({

        id : 'main-panel',

        className: 'panel panel-default',

        events : {
            // 'click #fruit-list > .fruit' : 'fruitClickHandler',
        },

        initialize: function() {
            this.template = _.template(Template);

            $(Backbone.areas.appContainer).html(this.$el);

            this.delegateEvents();
        },

        render: function(area) {
            // $(Backbone.areas.pageHeader).html(this.model.get('name'));

            this.$el.append(this.template());
            new area().render();

            return this;
        }

    });
});
