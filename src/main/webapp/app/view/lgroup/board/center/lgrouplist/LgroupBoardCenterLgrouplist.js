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
            dataIndex: 'lgroupTitle',
            flex: 1,
            text: 'Назва групи'
        }
    ],

    listeners: {
        viewready: 'initStore',
        rowclick: 'selectLgroup'
    }
  
});