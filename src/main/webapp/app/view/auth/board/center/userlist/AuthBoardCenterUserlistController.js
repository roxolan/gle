Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function() {
        var me = this;
        var userlist = me.getStore('users');
        userlist.load(function(records, operation, success){
            Kmbsvle.console(records);
            Kmbsvle.console(operation);
            Kmbsvle.console(success);
        });
        
        // var firstRow = userlist.getData()[0];
        // Kmbsvle.console(firstRow);
    }


}); 
