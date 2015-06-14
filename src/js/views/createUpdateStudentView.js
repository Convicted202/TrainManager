define([
    'underscore',
    'jquery',
    'backbone',
    'pikaday',
    'json!langs.json',
    'text!templates/createStudentPanel.tpl',
    'models/student',
    'collections/students-collection',
    'notify'
], function(_, $, Backbone, Pikaday, Langs, Template, StudentModel, StudentsCollection){
    'use strict';

    return Backbone.View.extend({

        id : 'blankEntry',

        className: 'tab-pane fade in active',

        events : {
            'click #saveBtn': 'save',
            'keyup #passport-input': 'tryFetchStudent'
        },

        configs: {
            passId:     '#passport-input',
            firstName:  '#first-name',
            lastName:   '#last-name',
            birthDate:  '#birth-date',
            coachName:  '#coach-name',
            level:      '#achievement-level',
            semCost:    '#seminar-payment',
            certCost:   '#certification-payment'
        },

        initialize: function() {
            this.lang = Backbone.getLang();

            this.template = _.template(Template);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function() {
            var root = this;

            // Backbone.tryLogout();
            StudentsCollection.fetch();

            this.$el.append(this.template({ lang: Langs[this.lang].views.createStudent }));

            this.picker = new Pikaday({
                field: $('#birth-date')[0],
                format: 'D MMM YYYY'
            });

            if (!this.areasInitialized) {
                this.areasInitialized = true;

                $.each(root.configs, function(k, v) {
                    root['$' + k] = $(v);
                })
            }

            return this;
        },

        tryFetchStudent: function(e) {
            var passID,
                studentFound;

            passID = $(this.configs.passId).val();
            studentFound  = StudentsCollection.findWhere({
                passportID: passID
            });

            if (studentFound) {
                this.$firstName.val(studentFound.get('name'));
                this.$lastName.val(studentFound.get('lastname'));
                this.$birthDate.val(studentFound.get('birthdate'));
                this.$level.val(studentFound.get('levelToAchieve'));
                this.$coachName.val(studentFound.get('coachName'));
                this.$semCost.val(studentFound.get('seminarCost'));
                this.$certCost.val(studentFound.get('certificationCost'));
            }
        },

        save: function() {
            var passID,
                studentFound;

            passID = $(this.configs.passId).val();
            studentFound  = StudentsCollection.findWhere({
                passportID: passID
            });

            if (studentFound) {
                this.updateStudent(studentFound);
            } else {
                this.saveStudent();
            }
        },

        saveStudent: function() {
            var model;

            // Backbone.tryLogout();

            model = new StudentModel({
                name: this.$firstName.val(),
                lastname: this.$lastName.val(),
                birthdate: this.$birthDate.val(),
                levelToAchieve: this.$level.val(),
                passportID: this.$passId.val(),
                coachName: this.$coachName.val(),
                seminarCost: this.$semCost.val(),
                certificationCost: this.$certCost.val()
            });

            model.on('invalid', function(model, errorArr) {
                errorArr.forEach(function(msg) {
                    $.notify(msg, "error");
                });
            });

            StudentsCollection.create(model);
        },

        updateStudent: function(studentFound) {
            studentFound.save({
                name: this.$firstName.val(),
                lastname: this.$lastName.val(),
                birthdate: this.$birthDate.val(),
                levelToAchieve: this.$level.val(),
                coachName: this.$coachName.val(),
                seminarCost: this.$semCost.val(),
                certificationCost: this.$certCost.val()
            });
        }

    });
});
