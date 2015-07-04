define([
    'backbone',
    'models/eventHeld'
], function(Backbone, EventModel) {
    'use strict';

    var Collection = Backbone.Collection.extend({

        model : EventModel,

        url: '/events'

    });

    return new Collection();
});
