Ext.define('Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.board.manage.center.list',
    
    controller: 'course.board.manage.center.list',
    viewModel: {
        type: 'course.board.manage.center.list'
    },
    requires: [
        'Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterListController',
        'Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterListModel'
    ],

    title: 'Список курсів для управління',
    itemId: 'courseBoardManageCenterList',
    
    bind: {
        store: '{coursemanagelist}'
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
