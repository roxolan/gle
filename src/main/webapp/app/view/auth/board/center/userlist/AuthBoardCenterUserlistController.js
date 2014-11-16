Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.auth.board.center.userlist',
    
    initStore: function(view, eOpts) {
        var me = this;
        var userlist = me.getStore('users');
        userlist.load(function(records, operation, success){
        
            var rowData = view.getStore().data;
            Kmbsvle.console(rowData);
        });
    },
    
    rowSelected: function(grid, record, tr, rowIndex, e, eOpts){
        var rhld = Ext.getCmp('rightholder');
        var userformPanel = Ext.create('widget.auth.board.right.userform');
        var userform = userformPanel.getForm();
        
        userform.setValues({
            username: record.data.username,
            firstName: record.data.firstName,
            lastName: record.data.lastName,
            email: record.data.email
        });
        
        rhld.removeAll();
        rhld.add(userformPanel);
    }

}); 
