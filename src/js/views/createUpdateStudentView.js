define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/createStudentPanel.tpl'
], function(_, $, Backbone, Template){
    'use strict';

    return Backbone.View.extend({

        id : 'blankEntry',

        className: 'tab-pane fade in active',

        events : {
            // 'click #fruit-list > .fruit' : 'fruitClickHandler',
        },

        config : {
            dataFruitAccess: 'data-fruit'
        },

        initialize: function() {
            this.template = _.template(Template);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function() {
            // $(Backbone.areas.pageHeader).html(this.model.get('name'));

            this.$el.append(this.template());

            return this;
        }

    });
});
