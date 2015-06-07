define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'text!templates/login.tpl',
    'text!templates/spinner.tpl',
    'models/userCredentials',
    'models/preferences'
], function(_, $, Backbone, Langs, Template, SpinnerTemplate, Model, PreferencesModel){
    'use strict';

    return Backbone.View.extend({

        id : 'login',

        events : {
            'click #signIn': 'signIn',
            'keyup #email': 'checkEnter',
            'keyup #password': 'checkEnter'
        },

        configs: {
            email: '#email',
            password: '#password'
        },

        keepAliveTime: 30 * 60 * 1000,

        initialize: function() {
            this.lang = Backbone.getLang();

            this.template = _.template(Template);
            this.spinner = _.template(SpinnerTemplate);

            $(Backbone.areas.appContainer).html(this.$el);

            this.delegateEvents();
        },

        render: function() {
            this.$el.append(this.template({ lang: Langs[this.lang].views.login }));

            return this;
        },

        signIn: function() {
            var root = this,
                $email = $(this.configs.email),
                $pass = $(this.configs.password),
                model;

            model = new Model({
                email: $email.val(),
                password: $pass.val(),
                expirationDate: Date.now() + this.keepAliveTime
            });

            model.on('invalid', function(model, errorArr) {
                $.notify(errorArr, "error");
                $pass.val('');
            });

            model.save(null, {
                success: function() {
                    Backbone.history.navigate('');
                    $(Backbone.areas.appContainer).html(root.spinner());
                    setTimeout(function() {
                        Backbone.history.loadUrl();
                    }, 2000);
                }
            });
        },

        checkEnter: function(e) {
            if (e.keyCode == 13) {
                this.signIn();
            }
        }

    });
});
