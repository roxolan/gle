Ext.define('Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.board.prof.center.list',
    
    controller: 'course.board.prof.center.list',
    viewModel: {
        type: 'course.board.prof.center.list'
    },
    requires: [
        'Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterListController',
        'Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterListModel'
    ],

    title: 'Перелік курсів, де є викладання',
    itemId: 'courseBoardProfCenterList',
    
    bind: {
        store: '{courseproflist}'
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



