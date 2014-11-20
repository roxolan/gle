Ext.define('Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserformController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.right.userform',
  
    removeUser: function(){
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();
        form.updateRecord();
        // record.data = form.getValues();
        var centerUserListStore = Ext.getCmp('centerholder').getComponent('centerUserList').getStore();
        Kmbsvle.console(centerUserListStore);
    },
    
    saveUser: function() {
        var me = this;
        var form = me.getView().getForm();
        
        form.updateRecord();
        var record = form.getRecord();
        // record.data = form.getFieldValues();
        
        
        var errs = record.validate();
        if (errs.isValid()) {
            
            Kmbsvle.console(record);
            // Kmbsvle.console(record[0]);
            
            try {
                record.save({
                    success: function(record, operation) {
                        if (typeof record.store === 'undefined') {
                            Ext.getCmp('centerholder').getComponent('centerUserList').getStore().add(record);
                            // me.getView().getStore().add(record);
                        }
                    },
                    failure: function(record, operation) {
                        Ext.Msg.alert('Save Failure', operation.request.scope.reader.jsonData.msg);
                    }
                });
            } catch (ConstraintViolationException) {
                throw new MyException("can not save record: ", e);
            }
        } else {
            form.markInvalid(errs);
            Ext.Msg.alert('Invalid Fields', 'Please fix the invalid entries!');
        }
        Kmbsvle.console(record);
    }


}); 
