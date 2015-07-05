define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/spinner.tpl',
    'text!templates/groupedView.tpl',
    'collections/grouped-students-collection',
    'collections/events-collection'
], function(_, $, Backbone, Langs, Spinner, Template, StudentsCollectionFabric, EventsCollection){
    'use strict';

    return Backbone.View.extend({

        id : 'grouped-view',

        className: 'tab-pane fade in active',

        configs: {
            title: '#event-title',
            semType: '#sem-type'
        },

        events: {
            'click #seminar-type li': 'selectGroup'
        },

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

                EventsCollection.fetch({
                    success: function(data){
                        that.on('grouped:rendered', function() {
                            data.models.forEach(function(v, k) {
                                var option =
                                    $('<option data-subtext=' + v.get('_id') + '>' + v.get('eventID') + ' ' + v.get('eventTitle') + '</option>');
                                $(that.configs.semType).append(option);
                            });
                            $(that.configs.semType).selectpicker('refresh');

                            that.renderTitle(options.id);
                        })
                    }
                });

                options.collection.fetch({
                    success: function(){
                        var opts = _.extend(options, { noFetch: true });

                        setTimeout(function(){
                            that.render(opts);
                        }, 500);
                    }
                });
            } else {
                langsTpl = Langs[this.lang].views.grouped;

                tpl = this.template({
                    levels: options.collection.models[0] && options.collection.models[0].attributes,
                    lang: langsTpl
                });

                this.$el.html(tpl);

                this.trigger('grouped:rendered');

                $(this.configs.semType).selectpicker();
            }

            return this;
        },

        renderTitle: function(id) {
            var event = EventsCollection.findWhere({ _id: id }),
                date;

            if (event) {
                $(this.configs.semType).selectpicker('val', event.get('eventID') + ' ' + event.get('eventTitle'));
                date = new Date(event.get('eventHeldDate'));
                $(this.configs.title).html(date.toDateString());
            }
        },

        selectGroup: function(e) {
            var li = $(e.currentTarget),
                id = li.find('.text-muted').text();

            Backbone.history.navigate('grouped/' + id);
            Backbone.history.loadUrl();
        }

    });
});
