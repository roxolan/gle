Ext.define('Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplist', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.lgroup.board.center.lgrouplist',   
      
    requires: [
        'Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplistController',
        'Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplistModel'
    ],
    controller: 'lgroup.board.center.lgrouplist',
    viewModel: {
        type: 'lgroup.board.center.lgrouplist'
    },

    title: 'Список навчальних груп',
    itemId: 'centerLgroupList',
    
    bind: {
        store: '{lgrouplist}'
    },
    
    viewConfig: {
        markDirty: false,
        stripeRows: false
    },
    tools: [
        {
            type: 'refresh',
            tooltip: 'Оновити список навчальних груп',
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
        rowclick: 'selectLgroup',
        rowdblclick: 'deleteLgroup'
    }
  
});