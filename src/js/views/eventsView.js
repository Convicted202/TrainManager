define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/spinner.tpl',
    'text!templates/newEvent.tpl',
    'text!templates/events.tpl',
    'models/eventHeld',
    'collections/events-collection'
    // ,
    // 'stickyHeaders'
    // ,
    // 'dropdown.bootstrap'
], function(_, $, Backbone, Langs, Spinner, NewEventTemplate, Template, EventModel, EventsCollection){
    'use strict';

    return Backbone.View.extend({

        id : 'events',

        className: 'tab-pane fade in active',

        events : {
            'click #add-evt': 'addEvent',
            'click #events-tbl > tbody > tr': 'showGroupedStudentList'
        },

        configs: {
            evtTitle: '#event-title',
            evtDate: '#event-date',
            evtNotes: '#event-notes'
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
            this.newEvent = _.template(NewEventTemplate);
            this.template = _.template(Template);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function(options) {
            var tpl,
                createNew,
                langsTpl;

            options = options || {};

            if (!options.noFetch) {
                var that = this;

                that.$el.html(that.spinner());

                EventsCollection.fetch({
                    success: function(){
                        setTimeout(function(){
                            that.render({ noFetch: true });
                        }, 1500);
                    }
                });
            } else {
                options.collection = options.collection || EventsCollection;

                langsTpl = Langs[this.lang].views.events;

                createNew = this.newEvent({
                    lang: langsTpl
                });

                tpl = this.template({
                    events: options.collection.models,
                    lang: langsTpl
                });

                this.$el.html(createNew).append(tpl);

                // $('#events-tbl').stickyTableHeaders({ scrollableArea: $(".panel-body")[0] });
            }

            this.evtTitle = $(this.configs.evtTitle);
            this.evtDate = $(this.configs.evtDate);
            this.evtNotes = $(this.configs.evtNotes);

            return this;
        },

        addEvent: function(e) {
            var model;

            model = new EventModel({
                eventID: EventsCollection.length,
                eventTitle: this.evtTitle.val() || this.evtDate.val(),
                eventHeldDate: this.evtDate.val(),
                notes: this.evtNotes.val(),
                eventCreatedDate: Date.now()
            });

            model.on('invalid', function(model, errorArr) {
                errorArr.forEach(function(msg) {
                    $.notify(msg, "error");
                });
            });

            if (model.isValid()) {
                EventsCollection.create(model);
                this.render({ noFetch: true });
            }
        },

        showGroupedStudentList: function(e) {
            var id = $(e.currentTarget).data('id');

            Backbone.history.navigate('grouped/' + id);
            Backbone.history.loadUrl();
        }
    });
});
