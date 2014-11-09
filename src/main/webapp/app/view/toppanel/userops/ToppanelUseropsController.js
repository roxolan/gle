Ext.define('Kmbsvle.view.toppanel.userops.ToppanelUseropsController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.toppanel.userops',
    
    requires: [
        'Kmbsvle.view.profile.form.Edit'
    ],
  
    openProfileEdit: function() {
        Ext.create('widget.profile.form.edit');
    },

    setUserName: function() {
        var me = this;
        var menuitem = me.lookupReference('userops_username');
        var fullname = Kmbsvle.getApplication().getUser().fullName;
    
        menuitem.setConfig('text', fullname);
    },

    control: {
        '#': {
            afterrender: 'setUserName'
        }
    }

}); 
