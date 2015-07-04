define([
    'backbone',
    'models/student'
], function(Backbone, StudentModel) {
    'use strict';

    var CollectionFabric = Backbone.Collection.extend({

        initialize: function(models, options) {
            this.id = options.id;
        },

        url: function() {
            return '/students/grouped/' + this.id;
        }

    });

    return CollectionFabric;
});
