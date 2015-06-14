define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/reports.tpl',
    'chartist',
    'tooltip'
], function(_, $, Backbone, Template, Chartist){
    'use strict';

    return Backbone.View.extend({

        id : 'reports',

        className: 'tab-pane fade in active',

        events : {
            // 'click #fruit-list > .fruit' : 'fruitClickHandler',
        },

        initialize: function() {
            // this.data = {
            //     labels: ["January", "February", "March", "April", "May", "June", "July"],
            //     datasets: [
            //         {
            //             label: "My First dataset",
            //             fillColor: "rgba(220,220,220,0.2)",
            //             strokeColor: "rgba(220,220,220,1)",
            //             pointColor: "rgba(220,220,220,1)",
            //             pointStrokeColor: "#fff",
            //             pointHighlightFill: "#fff",
            //             pointHighlightStroke: "rgba(220,220,220,1)",
            //             data: [65, 59, 80, 81, 56, 55, 40]
            //         },
            //         {
            //             label: "My Second dataset",
            //             fillColor: "rgba(151,187,205,0.2)",
            //             strokeColor: "rgba(151,187,205,1)",
            //             pointColor: "rgba(151,187,205,1)",
            //             pointStrokeColor: "#fff",
            //             pointHighlightFill: "#fff",
            //             pointHighlightStroke: "rgba(151,187,205,1)",
            //             data: [28, 48, 40, 19, 86, 27, 90]
            //         }
            //     ]
            // };


            this.template = _.template(Template);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function() {
            // $(Backbone.areas.pageHeader).html(this.model.get('name'));
            // Backbone.tryLogout();

            this.$el.append(this.template());

            new Chartist.Line('.ct-chart', {
                labels: ['January', 'February', "March", "April", "May", "June", "July", 'August', 'September', 'October', 'November', 'December'],
                series: [
                    [12, 9, 7, 8, 5, 12, 9, 7, 8, 5, 3, 10],
                    [2, 1, 3.2, 7, 3, 2, 1, 3.2, 7, 3, 5, 11],
                    [1, 3, 4, 5, 6, 1, 3, 4, 5, 6, 4, 7]
                ]
            }, {
                fullWidth: true,
                // showArea: true,
                low: 0,
                chartPadding: {
                    right: 40
                },
                plugins: [
                    Chartist.plugins.tooltip()
                ]
            });

            // var ctx = $('#line-chart')[0].getContext('2d');

            // var myLineChart = new Chart(ctx).Line(this.data, { responsive: true });

            return this;
        }

    });
});
