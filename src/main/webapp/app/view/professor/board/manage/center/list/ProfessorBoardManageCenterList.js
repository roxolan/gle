Ext.define('Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.professor.board.manage.center.list',
    
    controller: 'professor.board.manage.center.list',
    viewModel: {
        type: 'professor.board.manage.center.list'
    },
    requires: [
        'Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterListController',
        'Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterListModel'
    ],

    title: 'Список викладачів для управління',
    itemId: 'professorBoardManageCenterList',
    
    bind: {
        store: '{professormanagelist}'
    },
    
    viewConfig: {
        markDirty: false,
        stripeRows: false
    },
    tools: [
        {
            type: 'refresh',
            tooltip: 'Оновити список викладачів',
            listeners: {
                click: 'refreshStore'
            }
        }
    ],
  
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'fullName',
            flex: 1,
            text: 'Ім\'я викладача'
        }
    ],
    
    listeners: {
        viewready: 'initStore',
        rowclick: 'selectProfessor'
    }
  
});
