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
    }

}); 
