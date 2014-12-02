Ext.define('Kmbsvle.view.lgroup.board.center.userlist.LgroupBoardCenterLgrouplistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.center.lgrouplist',
    
    initStore: function() {
        this.getStore('lgrouplist').load();
    },
    
    selectLgroup: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var lgroupformPanel = Ext.create('widget.lgroup.board.right.lgroupform');
        var lgroupform = lgroupformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(lgroupformPanel);
        rhld.setTitle('Редагування профіля ' + record.data.lgroupTitle);
        rhld.expand();
        
        lgroupform.loadRecord(record);
        
        lgroupformPanel.lookupReference('usernameField').disable();
        lgroupformPanel.lookupReference('deleteBtn').enable();
    },
    
    deleteLgroup: function(grid, record, tr, rowIndex, e, eOpts) {
        var me = this;

        Ext.Ajax.request({
            url: 'lgroup/remove.json',
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
        var store = me.getStore('lgrouplist');
        store.load();
    }

}); 
