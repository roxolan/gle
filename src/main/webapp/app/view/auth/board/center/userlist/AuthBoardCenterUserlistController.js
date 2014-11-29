Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function() {
        this.getStore('userlist').load();
    },
    
    selectUser: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        var userform = userformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(userformPanel);
        rhld.setTitle('Редагування профіля');
        rhld.expand();
        
        userform.loadRecord(record);
        
        userformPanel.lookupReference('usernameField').disable();
        userformPanel.lookupReference('deleteBtn').enable();
    },
    
    deleteUser: function(grid, record, tr, rowIndex, e, eOpts) {
        var me = this;

        Ext.Ajax.request({
            url: 'user/remove.json',
            params: {
                data: Ext.JSON.encode(record.data)
            },
            success: function() {
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
