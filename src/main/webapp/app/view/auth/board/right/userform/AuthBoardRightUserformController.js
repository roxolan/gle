Ext.define('Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserformController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.right.userform',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('userlist').load(function(records, operation, success){
        });
    },
    
    saveUser: function() {
        var me = this;
//        me.getStore('user').load(function(records, operation, success){
//        });

        var form = me.getView().getForm();
        var record = form.getRecord();        

        // record.data = form.getFieldValues();
        if (!Ext.isEmpty(record)) {
            me.getView().getForm().updateRecord();
            var errs = record.validate();
            if (errs.isValid()) {
            
            // Kmbsvle.console(record);
            // Kmbsvle.console(record[0]);

            //try {
//                Ext.Ajax.request({
//                    url: 'user/store.json',
//                    params: {
//                        data: Ext.JSON.encode(record.data)
//                    },
//                    success: function() {
//                        me.refreshStore();
//                    }
//                });
                record.save({
//                    extraParams: {
//                        data: Ext.JSON.encode(record.data)
//                    },
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
//            } catch (ConstraintViolationException) {
//                throw new ConstraintViolationException("can not save record: ", e);
//            }
            } else {
                form.markInvalid(errs);
                Ext.Msg.alert('Invalid Fields', 'Please fix the invalid entries!');
            }           
        }
        // Kmbsvle.console(record);
    },
    
    deleteUser: function(){
        var me = this;
        var form = me.getView().getForm();
        // form.updateRecord();
        var record = form.getRecord();
        var authBoardLeftPanelController = Ext.getCmp('leftholder').getComponent('authBoardLeftPanel').getController();

        Ext.Msg.confirm(
            'Підтвердіть видалення користувача', 
            'Ви впевнені, що бажаєте видалити користувача ' + record.get('fullName') + '?',
            function(btn) {
                if (btn === 'yes') {
                    try {
                        Ext.Ajax.request({
                            url: 'user/remove.json',
                            params: {
                                data: Ext.JSON.encode(record.data)
                            },
                            success: function() {
                                me.refreshStore();
                            }
                        });
                    /* 
                        FOR SOME REASON??? .destroy() does not get through, so using direct Ext.Ajax.request() as above
                        record.destroy({
                            success: function(record, operation) {
                                Kmbsvle.console(operation);
                            },
                            failure: function(record, operation) {
                                Ext.Msg.alert('Не вдалося видалити', operation.request.scope.reader.jsonData.msg);
                            }
                        });
                    */
                    } catch (ConstraintViolationException) {
                        throw new ConstraintViolationException("can not delete record: ", e);
                    }
                    authBoardLeftPanelController.addUser();
                }
            });
        
        // record.data = form.getValues();
        // var centerUserListStore = Ext.getCmp('centerholder').getComponent('centerUserList').getStore();
    },
    
    refreshStore: function() {
        var me = this;
        var authBoardCenterUserlistStore = Ext.getCmp('centerholder').getComponent('centerUserList').getStore('userlist');
        
        authBoardCenterUserlistStore.load();
    }


}); 
