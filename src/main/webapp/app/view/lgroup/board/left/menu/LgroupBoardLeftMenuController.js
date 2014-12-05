Ext.define('Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.left.menu',
  
    requires: [
        'Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanel',
        'Kmbsvle.view.lgroup.single.center.panel.LgroupSingleCenterPanel',
        'Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanel',
        
        'Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplist'
        
    ],

    routes: {
        'lgroup': 'openLgroupSingle'
    },

    openLgroupSingle: function() {
        // shall have to be removed from here, yes?
        var me = this;
        me.changeLeftPanel('widget.lgroup.single.left.panel', 'lgroup_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.lgroup.single.center.panel');
        me.changeRightPanel('widget.lgroup.single.right.panel', 'lgroup_single_right_panel_title', 'collapse');
        me.redirectTo('lgroup');
    },
    
    openLgroupBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.lgroup.board.center.lgrouplist');
        me.changeRightPanel('widget.lgroup.board.right.lgroupform', 'dummy', 'collapse');
    },
    
    addLgroup: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var lgroupformPanel = Ext.create('widget.lgroup.board.right.lgroupform');
        var lgroupform = lgroupformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(lgroupformPanel);
        rhld.setTitle('Нова навчальна група');
        rhld.expand();
        
        
        var newLgroup = Ext.create('Kmbsvle.model.Lgroup', {
        });
        
        lgroupform.loadRecord(newLgroup);
        lgroupformPanel.lookupReference('deleteBtn').disable();
                
    }


}); 
