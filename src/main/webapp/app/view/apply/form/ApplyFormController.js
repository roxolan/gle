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
    },
    
    onSameAddressChange: function(box, checked) {
        // inspired by checkout form at http://dev.sencha.com/extjs/5.0.0/examples/kitchensink/#form-checkout
        var fieldset = box.ownerCt;
        Ext.Array.forEach(fieldset.query('textfield'), function(field) {
            field.setDisabled(checked);
            field.el.animate({opacity: checked ? 0.3 : 1});
        });
    }
    
}); 



