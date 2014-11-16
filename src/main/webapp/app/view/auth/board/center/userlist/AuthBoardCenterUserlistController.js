Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function() {
        var me = this;
        me.getStore('users').load();
    }


}); 
