Ext.define('Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserformController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.right.userform',
    
    deleteUser: function(){
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();
        var authBoardLeftMenuController = Ext.getCmp('leftholder').getComponent('authBoardLeftMenu').getController();

        Ext.Msg.confirm(
            'Підтвердіть видалення користувача', 
            'Ви впевнені, що бажаєте видалити користувача ' + record.get('fullName') + '?',
            function(btn) {
                if (btn === 'yes') {
                    Ext.Ajax.request({
                            url: 'user/remove.json',
                            params: {
                                data: Ext.JSON.encode(record.data)
                            },
                            headers: {
                                contentType: 'text/plain; charset=utf-8'
                            },
                            success: function(response, opts) {
                                me.refreshStore();
                                Kmbsvle.console(response)
                                if (Ext.decode(response.responseText).success === true ) {
                                    Ext.Msg.alert('Успішне видалення користувача', Ext.decode(response.responseText).msg);
                                } else if (Ext.decode(response.responseText).success === false ) {
                                    Ext.Msg.alert('Не вдалося видалити', Ext.decode(response.responseText).msg);                            
                                } else {
                                    Ext.Msg.alert('Повідомлення', Ext.decode(response.responseText).msg);                            
                                }
                            },
                            failure: function(response, opts) {
                                // Failure never comes :(
                                Kmbsvle.console('failure of delete');
                                Kmbsvle.console(Ext.decode(response.responseText).msg);
                                Ext.Msg.alert('Не вдалося видалити');
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

                    authBoardLeftMenuController.addUser();
                }
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
                            Ext.getCmp('centerholder').getComponent('centerUserList').getSelectionModel().select(record, true);
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
    
    refreshStore: function() {
        var me = this;
        var authBoardCenterUserlistStore = Ext.getCmp('centerholder').getComponent('centerUserList').getStore('userlist');
        
        authBoardCenterUserlistStore.load();
    }


}); 
