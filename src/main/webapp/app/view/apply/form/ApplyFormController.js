Ext.define('Kmbsvle.view.apply.form.ApplyFormController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.apply.form',

    requires: [ ],

    routes: { },
  
    control: { },
  
    applySubmit: function() {
        var me = this;
        me.getView().hide();
    },
    
    openUploadForm: function() {
        Ext.Msg.alert('Opened upload form', 'here to be');
    }
    
}); 



