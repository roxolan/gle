Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupformController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.right.lgroupform',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('userlist').load(function(records, operation, success){
        });
    },
    
    saveUser: function() {
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();

        if (!Ext.isEmpty(record)) {
            form.updateRecord();
            var errs = record.validate();
            if (errs.isValid()) {
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
            } else {
                form.markInvalid(errs);
                Ext.Msg.alert('Invalid Fields', 'Please fix the invalid entries!');
            }           
        }
    },
    
    deleteUser: function(){
        var me = this;
        var form = me.getView().getForm();
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
    },
    
    refreshStore: function() {
        var me = this;
        var authBoardCenterUserlistStore = Ext.getCmp('centerholder').getComponent('centerUserList').getStore('userlist');
        
        authBoardCenterUserlistStore.load();
    }


}); 
