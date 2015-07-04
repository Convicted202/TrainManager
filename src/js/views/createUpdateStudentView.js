define([
    'underscore',
    'jquery',
    'backbone',
    'pikaday',
    'json!langs.json',
    'text!templates/createStudentPanel.tpl',
    'models/student',
    'collections/students-collection',
    'collections/events-collection',
    'dropdown',
    'notify'
], function(_, $, Backbone, Pikaday, Langs, Template, StudentModel, StudentsCollection, EventsCollection){
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
            certCost:   '#certification-payment',
            levelType:  '#a-type',
            curLevel:   '#current-lvl',
            curLvlType: '#c-type',
            semType:    '#sem-type'
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

            EventsCollection.fetch({
                success: function(data){
                    data.models.forEach(function(v, k) {
                        var option =
                            $('<option data-subtext=' + v.get('_id') + '>' + v.get('eventID') + ' ' + v.get('eventTitle') + '</option>');
                        $(root.configs.semType).append(option);
                    });
                    $(root.configs.semType).selectpicker('refresh');
                }
            });

            $(this.configs.semType).selectpicker();
            $(this.configs.levelType).selectpicker();
            $(this.configs.curLvlType).selectpicker();

            return this;
        },

        tryFetchStudent: function(e) {
            var passID,
                studentFound,
                seminar,
                event;

            passID = $(this.configs.passId).val();
            studentFound  = StudentsCollection.findWhere({
                passportID: passID
            });

            if (studentFound) {
                event = studentFound.get('attachedEvent');

                if (event === '-1') {
                    this.$semType.selectpicker('val', '');
                } else {
                    seminar = $(this.configs.semType).
                        siblings().
                        find('small.text-muted:contains("' + event + '")');

                    this.$semType.
                        selectpicker('val',
                            seminar.
                                parent().
                                clone().
                                children('small').
                                remove().
                                end().
                                text());
                }

                this.$firstName.val(studentFound.get('name'));
                this.$lastName.val(studentFound.get('lastname'));
                this.$birthDate.val(studentFound.get('birthdate'));
                this.$level.val(studentFound.get('levelToAchieve'));
                this.$coachName.val(studentFound.get('coachName'));
                this.$semCost.val(studentFound.get('seminarCost'));
                this.$certCost.val(studentFound.get('certificationCost'));
                this.$levelType.selectpicker('val', studentFound.get('levelType'));
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
            var model,
                seminar = $(this.configs.semType).
                    siblings().
                    find('li.selected').
                    find('small.text-muted');

            // Backbone.tryLogout();

            model = new StudentModel({
                name: this.$firstName.val(),
                lastname: this.$lastName.val(),
                birthdate: this.$birthDate.val(),
                levelToAchieve: this.$level.val(),
                passportID: this.$passId.val(),
                coachName: this.$coachName.val(),
                seminarCost: this.$semCost.val(),
                certificationCost: this.$certCost.val(),
                levelType: this.$levelType.val(),
                attachedEvent: seminar.text()
            });

            model.on('invalid', function(model, errorArr) {
                errorArr.forEach(function(msg) {
                    $.notify(msg, "error");
                });
            });

            StudentsCollection.create(model);
        },

        updateStudent: function(studentFound) {
            var seminar = $(this.configs.semType).
                    siblings().
                    find('li.selected').
                    find('small.text-muted');

            studentFound.save({
                name: this.$firstName.val(),
                lastname: this.$lastName.val(),
                birthdate: this.$birthDate.val(),
                levelToAchieve: this.$level.val(),
                coachName: this.$coachName.val(),
                seminarCost: this.$semCost.val(),
                certificationCost: this.$certCost.val(),
                levelType: this.$levelType.val(),
                attachedEvent: seminar.text()
            });
        }

    });
});
