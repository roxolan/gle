Ext.define('Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.center.lgrouplist',
    
    requires: [
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupform'
    ],
    
    initStore: function() {
        var me = this;
        me.getStore('lgrouplist').load();
    },
    
    selectLgroup: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var lgroupformPanel = Ext.create('widget.lgroup.board.right.lgroupform');
        var lgroupform = lgroupformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(lgroupformPanel);
        rhld.setTitle('Редагування профіля групи ' + record.data.lgroupTitle);
        rhld.expand();
        
        lgroupform.loadRecord(record);
        
        lgroupformPanel.lookupReference('deleteBtn').enable();
    },
    
    refreshStore: function() {
        var me = this;
        me.getStore('lgrouplist').load();
    }

}); 
