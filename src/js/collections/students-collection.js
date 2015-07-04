define([
    'backbone',
    'models/student'
], function(Backbone, StudentModel) {
    'use strict';

    var Collection = Backbone.Collection.extend({

        model : StudentModel,

        url: '/students',

        findMatches: function(props, query) {
            var coll;

            if (!(props instanceof Array)) {
                props = [props];
            }

            coll = this.filter(function(model) {
                var res = false;
                props.forEach(function(prop) {
                    res = res || model.get(prop).match(query);
                });
                return res;
            });

            return new Collection(coll);
        }

    });

    return new Collection();
});
