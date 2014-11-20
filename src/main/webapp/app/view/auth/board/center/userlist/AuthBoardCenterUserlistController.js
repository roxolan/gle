Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function(view, eOpts) {
        var me = this;
        me.getStore('users').load(function(records, operation, success){
        });
    },
    
    rowSelected: function(grid, record, tr, rowIndex, e, eOpts){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        var userform = userformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(userformPanel);
        rhld.setConfig('title', 'Редагування профіля');
        rhld.expand();
        
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
        userform.updateRecord();

    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('users');
        store.load();
    }

}); 
