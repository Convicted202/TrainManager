define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/spinner.tpl',
    'text!templates/groupedView.tpl',
    'collections/grouped-students-collection'
], function(_, $, Backbone, Langs, Spinner, Template, StudentsCollectionFabric){
    'use strict';

    return Backbone.View.extend({

        id : 'grouped-view',

        className: 'tab-pane fade in active',

        modelProps: [
            'name',
            'lastname',
            'birthdate',
            'levelToAchieve',
            'passportID',
            'coachName',
            'seminarCost',
            'certificationCost'
        ],

        initialize: function() {
            this.lang = Backbone.getLang();

            this.spinner = _.template(Spinner);
            this.template = _.template(Template);

            this.Collections = {};

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function(options) {
            var tpl,
                search,
                langsTpl;

            options = options || { };

            if (!options.id) {
                options.id = ''
            }

            if (!this.Collections[options.id]) {
                this.Collections[options.id] = new StudentsCollectionFabric([], { id: options.id });
            }

            options.collection = this.Collections[options.id];

            if (!options.noFetch) {
                var that = this;

                that.$el.html(that.spinner());

                options.collection.fetch({
                    success: function(){
                        var opts = _.extend(options, {noFetch: true});

                        setTimeout(function(){
                            that.render(opts);
                        }, 500);
                    }
                });
            } else {
                langsTpl = Langs[this.lang].views.review;

                tpl = this.template({
                    levels: options.collection.models[0] && options.collection.models[0].attributes,
                    lang: langsTpl
                });

                this.$el.html(tpl);
            }

            return this;
        }

    });
});
