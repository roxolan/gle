Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlist', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.auth.board.center.userlist',   
      
    controller: 'auth.board.center.userlist',
    viewModel: {
        type: 'auth.board.center.userlist'
    },
    requires: [
        'Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistController',
        'Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistModel'
    ],

    title: 'Список користувачів',
    itemId: 'centerUserList',
    
    bind: {
        store: '{userlist}'
    },
    
    viewConfig: {
        markDirty: false,
        stripeRows: false
    },
    tools: [
        {
            type: 'refresh',
            tooltip: 'Оновити список користувачів',
            listeners: {
                click: 'refreshStore'
            }
        }
    ],
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'username',
            flex: 1,
            text: 'ID користувача'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'firstName',
            flex: 1,
            text: 'Ім\'я'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'lastName',
            flex: 1,
            text: 'Прізвище'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'email',
            flex: 2,
            text: 'Email'
        }
    ],

    listeners: {
        viewready: 'initStore',
        rowclick: 'selectUser'
    }
  
});
