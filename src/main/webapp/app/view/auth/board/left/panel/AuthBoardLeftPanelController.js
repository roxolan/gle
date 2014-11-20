Ext.define('Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.left.panel',
  
    requires: [
        'Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlist',
        'Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserform'    
    ],

    openUserBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.auth.board.center.userlist');
        me.changeRightPanel('widget.auth.board.right.userform', 'dummy', 'expand');
    },
    
    addUser: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        
        rhld.removeAll();
        rhld.add(userformPanel);
        rhld.setConfig('title', 'Новий користувач');
        
        var userform = userformPanel.getForm();
        var newUser = Ext.create('Kmbsvle.model.User', {
            username: 'kmbsuser',
            learnerRole: 'N',
            professorRole: 'N',
            managerRole: 'N',
            adminRole: 'N'
        });
        
        userform.loadRecord(newUser);
        
        userform.updateRecord();
        
        // record.data = form.getFieldValues();

    }
}); 
