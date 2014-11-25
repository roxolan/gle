Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('userlist').load(function(records, operation, success){
        });
    },
    
    selectUser: function(grid, record, tr, rowIndex, e, eOpts){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        var userform = userformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(userformPanel);
        rhld.setConfig('title', 'Редагування профіля');
        rhld.expand();
        
        // This did not work, although pulled in some data
        /*
        userform.setValues({
            username: record.data.username,
            firstName: record.data.firstName,
            lastName: record.data.lastName,
            email: record.data.email,
            password: record.data.password
        });
        */
        
        userform.loadRecord(record);
        // Kmbsvle.console('the loadRecord  has this record: ');
        // Kmbsvle.console(record);
        
        userformPanel.lookupReference('usernameField').disable();
        userformPanel.lookupReference('deleteBtn').enable();

        // userform.updateRecord();

        // Kmbsvle.console(record);

    },
    
    deleteUser: function(grid, record, tr, rowIndex, e, eOpts) {
        var me = this;
        Kmbsvle.console('deleteUser run. record.data: ');
        Kmbsvle.console(record.data);
        Kmbsvle.console(Ext.JSON.encode(record.data));
//        record.destroy({
//            success: function(record, operation) {
//                Kmbsvle.console('success');
//            },
//            failure: function(record, operation) {
//                Ext.Msg.alert('Не вдалося видалити', operation.request.scope.reader.jsonData.msg);
//            }
//        });
//        var encodedRecord = {data: ""};
//        encodedRecord.data = Ext.JSON.encode(record.data);
//        Kmbsvle.console(encodedRecord);
//        me.getStore('userlist').remove(encodedRecord);
//        var selection = me.getView().getSelectionModel().getSelection()[0];
//        if (selection) {
//            me.getStore('userlist').remove(selection);
//        }
        Ext.Ajax.request({
            url: 'user/remove.json',
            params: {
                data: Ext.JSON.encode(record.data)
            },
            success: function(response) {
                me.refreshStore();
            }
        });
        
    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('userlist');
        store.load();
    }

}); 
