Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.board.center.list',
    
    controller: 'course.board.center.list',
    viewModel: {
        type: 'course.board.center.list'
    },
    requires: [
        'Kmbsvle.view.course.board.center.list.CourseBoardCenterListController',
        'Kmbsvle.view.course.board.center.list.CourseBoardCenterListModel'
    ],

    title: 'Список курсів',
    itemId: 'courseBoardCenterList',
    
    bind: {
        store: '{courselist}'
    },
    
    viewConfig: {
        markDirty: false,
        stripeRows: false
    },
    tools: [
        {
            type: 'refresh',
            tooltip: 'Оновити список курсів',
            listeners: {
                click: 'refreshStore'
            }
        }
    ],
  
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'courseTitle',
            flex: 1,
            text: 'Назва курсу'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'lgroupTitle',
            text: 'Група'
        }
    ],
    
    listeners: {
        viewready: 'initStore',
        rowclick: 'selectCourse'
    }
  
});
