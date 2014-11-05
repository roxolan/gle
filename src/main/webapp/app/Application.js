/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
    paths: {
        'Overrides': 'overrides'
    }
});


Ext.define('Kmbsvle.Application', {
    extend: 'Ext.app.Application',

    name: 'Kmbsvle',

    requires: [
        'Kmbsvle.view.auth.form.LoginForm',
        'Kmbsvle.view.main.MainView',
        'Kmbsvle.view.main.MainViewController',
        'Ext.layout.container.Border'
    ],

    controllers: [
        'MainController'
    ],

    stores: [
    ],

    models: [],

    views: [
    ],

    init: function() {
        Kmbsvle.URL_PREFIX = 'gle/';
        Ext.Ajax.on('beforerequest', function(conn, options, eOpts){
            options.url = Kmbsvle.URL_PREFIX + options.url;
        });    
    },

    launch: function() {
        var me = this;
        me.logonWindow = Ext.create('Kmbsvle.view.auth.form.LoginForm');
        me.logonWindow.show();
    },
    doAfterLogon: function() {
        var me = this;
        me.logonWindow.hide();
        me.mainViewport = Ext.create('Kmbsvle.view.main.MainView');
    }

});
