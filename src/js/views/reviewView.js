define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/spinner.tpl',
    'text!templates/review.tpl',
    'text!templates/searchTable.tpl',
    'collections/students-collection',
    'stickyHeaders',
    'dropdown.bootstrap'
], function(_, $, Backbone, Langs, Spinner, Template, SearchTemplate, StudentsCollection){
    'use strict';

    return Backbone.View.extend({

        id : 'review',

        className: 'tab-pane fade in active',

        events : {
            'click #viewEditBtn > button': 'editToggle',
            'click .deleteStudentBtn': 'removeUser',
            'click #search-drop > li': 'selectSearchBy',
            'keyup #searchInput': 'searchQuery'
        },

        configs: {
            viewEditBtn: '#viewEditBtn',
            deleteBtns: '.deleteStudentBtn',
            searchArea: '#searchArea',
            searchDropDown: '#search-drop',
            searchByBtn: '#searchByBtn',
            searchInput: '#searchInput',

            editClass: 'edit'
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
            this.searchTemplate = _.template(SearchTemplate);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function(options) {
            var tpl,
                search,
                langsTpl;

            options = options || {};

            if (!options.noFetch) {
                var that = this;

                that.$el.html(that.spinner());

                StudentsCollection.fetch({
                    success: function(){
                        setTimeout(function(){
                            that.render({ noFetch: true });
                        }, 1500);
                    }
                    // ,
                    // error: function(){
                    //     console.log('error');
                    // }
                });
            } else {
                options.collection = options.collection || StudentsCollection;

                langsTpl = Langs[this.lang].views.review;

                tpl = this.template({
                    students: options.collection.models,
                    lang: langsTpl
                });

                if (!options.leaveSearch) {
                    this.$el.html(this.searchTemplate({ lang: langsTpl })).append(tpl);
                } else {
                    search = $(this.configs.searchArea).detach();
                    this.$el.html(search).append(tpl);
                }

                if (this.$el.is('.edit-mode')) {
                    $(this.configs.viewEditBtn).addClass(this.configs.editClass);
                    $(this.configs.deleteBtns).removeClass('invisible');
                }

                $('#review-tbl').stickyTableHeaders({ scrollableArea: $(".panel-body")[0] });
            }

            return this;
        },

        editToggle: function(e) {
            this.$viewEditBtn = $(this.configs.viewEditBtn);
            this.$deleteBtns = $(this.configs.deleteBtns);

            this.$viewEditBtn.toggleClass(this.configs.editClass);

            this.$deleteBtns.toggleClass('invisible');

            this.$el.toggleClass('edit-mode');
        },

        removeUser: function(e) {
            var modelId = $(e.target).parents('tr').data('id'),
                model;

            model = StudentsCollection.findWhere({ _id: modelId });
            // StudentsCollection.remove(model);
            model.destroy();

            this.render({ leaveSearch: true, noFetch: true });
        },

        selectSearchBy: function(e) {
            var target = $(e.target).is('a') ? $(e.target) : $(e.target).find('a'),
                searchByVal = target.html(),
                searchModelField = target.data('search');

            this.$searchByBtn = $(this.configs.searchByBtn);
            this.$searchByBtn.
                attr('data-search', searchModelField).
                data('search', searchModelField).
                html(searchByVal + ' <span class="caret"></span>');
        },

        searchQuery: function(e) {
            var col,
                dataVal;

            this.$searchByBtn = $(this.configs.searchByBtn);
            this.$searchInput = $(this.configs.searchInput);

            dataVal = this.$searchByBtn.data('search') === 'ALL' ?
                            this.modelProps :
                            this.$searchByBtn.data('search');

            col = StudentsCollection.findMatches(dataVal, this.$searchInput.val());
            this.render({ collection: col, leaveSearch: true });

            this.$searchInput.focus();
        }

    });
});
