/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Kmbsvle.view.main.MainController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    requires: [
        'Ext.MessageBox'
         
    ],

    alias: 'controller.main',

    routes: {
        'profile/edit' : 'openMyProfileEdit'
    },

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Is this the click?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
        }
    },

    customClick: function() {
        var lhldr = Ext.getCmp('leftholder');
        lhldr.setBind({
                title: '{vleName}'
        });
    },

    hideMainTabsToCalendar: function() {
    },

    onCalendar: function() {
        this.redirectTo('calendar');
        var chld = Ext.getCmp('centerholder');
        chld.removeAll();
        chld.add({
            xtype: 'calendar.center'
        });
    },

    openMyProfileEdit: function(btn) {
      var mainTabPanel = btn.up('app-main').down('#mainTabPanel');
        console.log(mainTabPanel);
    }
    
});
