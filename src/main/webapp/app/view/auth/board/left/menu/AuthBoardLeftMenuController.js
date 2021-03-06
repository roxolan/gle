Ext.define('Kmbsvle.view.auth.board.left.menu.AuthBoardLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.left.menu',
  
    requires: [
        'Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlist',
        'Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserform'    
    ],

    openUserBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.auth.board.center.userlist');
        me.changeRightPanel('widget.auth.board.right.userform', 'dummy', 'collapse');
    },
    
    addUser: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        var userform = userformPanel.getForm();
        
        rhld.removeAll();
        rhld.add(userformPanel);
        rhld.setTitle('Новий користувач');
        rhld.expand();
        
        
        var newUser = Ext.create('Kmbsvle.model.User', {
            username: 'kmbsuser',
            learnerRole: 'N',
            professorRole: 'N',
            managerRole: 'N',
            adminRole: 'N'
        });
        
        userform.loadRecord(newUser);
        userformPanel.lookupReference('deleteBtn').disable();
                
    }
}); 
