define([
    'underscore',
    'jquery',
    'backbone',
    'json!langs.json',
    'models/preferences',
    'text!templates/preferences.tpl'
], function(_, $, Backbone, Langs, PreferencesModel, Template){
    'use strict';

    return Backbone.View.extend({

        id : 'preferences',

        className: 'tab-pane fade in active',

        events : {
            'click #language > li': 'langSelect',
            'change #uploader': 'uploadFile'
        },

        configs: {
            langBtn: '#langBtn'
        },

        initialize: function() {
            this.model = new PreferencesModel();
            this.model.fetch();

            this.lang = Backbone.getLang();

            this.template = _.template(Template);

            $(Backbone.areas.panelContent).html(this.$el);

            this.delegateEvents();
        },

        render: function() {
            var lng = this.model.get('langString');

            this.$el.append(this.template({ lang: Langs[this.lang].views.preferences, curLang: lng }));

            return this;
        },

        langSelect: function(e) {
            var target = $(e.target).is('a') ? $(e.target) : $(e.target).find('a'),
                newLang = target.attr('data-lang'),
                $langBtn,
                newDDownVal = Langs[newLang].views.preferences[newLang];

            this.model.set('lang', newLang);
            this.model.set('langString', newDDownVal);

            this.model.save();

            this.lang = Backbone.getLang();

            // Backbone.history.navigate('preferences');
            // Backbone.history.loadUrl();

            $langBtn = $(this.configs.langBtn);

            $langBtn.html(newDDownVal + ' <span class="caret"></span>');
        },

        uploadFile: function(e) {
            console.log(e.files);

            var reader = new FileReader(),
                file = e.target.files[0];

            reader.onload = function(evt) {
                // $.ajax({
                //     url: '/preferences/upload',
                //     type: 'POST',
                //     data: evt.target.result,
                //     cache: false,
                //     dataType: 'json',
                //     contentType: 'text/plain; charset=x-user-defined-binary',
                //     success: function(data, textStatus, jqXHR)
                //     {
                //         if(typeof data.error === 'undefined')
                //         {
                //             // Success so call function to process the form
                //             // submitForm(event, data);
                //         }
                //         else
                //         {
                //             // Handle errors here
                //             console.log('ERRORS: ' + data.error);
                //         }
                //     },
                //     error: function(jqXHR, textStatus, errorThrown)
                //     {
                //         // Handle errors here
                //         console.log('ERRORS: ' + textStatus);
                //         // STOP LOADING SPINNER
                //     }
                // });
                var passData = encodeURIComponent(evt.target.result);
                $.ajax({
                    url: "/preferences/upload",
                    type: 'POST',
                    contentType: 'text/plain',
                    data: evt.target.result,
                    success: function(data, status, xhr) {}
                });

            };
            reader.readAsBinaryString(file);
        }

    });
});
