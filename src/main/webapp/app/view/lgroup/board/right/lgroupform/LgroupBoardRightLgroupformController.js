Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupformController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.right.lgroupform',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('lgrouplist').load(function(records, operation, success){
        });
    },
    
    addCourse: function() {
        // requested by a button
        Ext.Msg.alert('Adding Courses for the Lgroup');
    },
    
    saveLgroup: function() {
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
                            Ext.getCmp('centerholder').getComponent('centerLgroupList').getStore().add(record);
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
    
    deleteLgroup: function(){
        // requested by a button
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();
        var authBoardLeftPanelController = Ext.getCmp('leftholder').getComponent('authBoardLeftPanel').getController();

        Ext.Msg.confirm(
            'Підтвердіть видалення навчальної групи', 
            'Ви впевнені, що бажаєте видалити навчальну групу ' + record.get('lgroupTitle') + '?',
            function(btn) {
                if (btn === 'yes') {
                    try {
                        Ext.Ajax.request({
                            url: 'lgroup/remove.json',
                            params: {
                                data: Ext.JSON.encode(record.data)
                            },
                            success: function() {
                                me.refreshStore();
                            }
                        });
                    } catch (ConstraintViolationException) {
                        throw new ConstraintViolationException("can not delete record: ", e);
                    }
                    authBoardLeftPanelController.addUser();
                }
            });
    },
    
    refreshStore: function() {
        var me = this;
        var lgroupBoardCenterLgrouplistStore = Ext.getCmp('centerholder').getComponent('centerLgroupList').getStore('lgrouplist');
        
        lgroupBoardCenterLgrouplistStore.load();
    }


}); 
