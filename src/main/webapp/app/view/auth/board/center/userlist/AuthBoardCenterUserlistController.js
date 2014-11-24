Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('users').load(function(records, operation, success){
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
        // userform.updateRecord();
        
        userformPanel.lookupReference('usernameField').disable();
        userformPanel.lookupReference('deleteBtn').enable();

        // Kmbsvle.console(record);

    },
    
    deleteUser: function(record) {
        var me = this;

        record.destroy({
            failure: function(record, operation) {
                Ext.Msg.alert('Не вдалося видалити', operation.request.scope.reader.jsonData.msg);
            }
        });
        me.refreshStore();
    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('users');
        store.load();
    }

}); 
