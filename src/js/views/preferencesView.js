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
            'click #language > li': 'langSelect'
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
            Backbone.tryLogout();

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

            Backbone.history.navigate('preferences');
            Backbone.history.loadUrl();

            $langBtn = $(this.configs.langBtn);

            $langBtn.html(newDDownVal + ' <span class="caret"></span>');
        }

    });
});
