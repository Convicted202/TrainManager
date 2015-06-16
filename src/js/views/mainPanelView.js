define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/mainPanel.tpl',
    'views/createUpdateStudentView',
    'views/reviewView',
    'views/reportView'
], function(_, $, Backbone, Langs, Template, CreateUpdateView, ReviewView, ReportView){
    'use strict';

    return Backbone.View.extend({

        id : 'main-panel',

        className: 'panel panel-default',

        initialize: function() {
            this.lang = Backbone.getLang();

            this.template = _.template(Template);

            $(Backbone.areas.appContainer).html(this.$el);

            this.delegateEvents();
        },

        render: function(area, areaName) {
            this.$el.append(this.template({ _area: areaName, lang: Langs[this.lang].views.mainView }));
            new area().render();

            return this;
        }

    });
});
