define([
    'backbone',
    'models/student'
    // ,
    // 'backbone.localStorage'
], function(Backbone, StudentModel) {
    'use strict';

    var Collection = Backbone.Collection.extend({

        model : StudentModel,

        // localStorage : new Backbone.LocalStorage('students'),
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
