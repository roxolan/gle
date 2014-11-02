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
        'Kmbsvle.view.auth.form.LoginForm'
    ],

    controllers: [
        'MainController'
    ],

    stores: [
    ],

    models: [],

    views: [
    ],



    launch: function() {
        var me = this;
        me.logonWindow = Ext.create('Kmbsvle.view.auth.form.LoginForm');
        me.logonWindow.show();
    },
    doAfterLogon: function() {
        alert('from doAfterLogon');
    }

});
