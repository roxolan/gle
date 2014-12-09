Ext.define('Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.profboard.center.list',
    
    controller: 'course.profboard.center.list',
    viewModel: {
        type: 'course.profboard.center.list'
    },
    requires: [
        'Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterListController',
        'Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterListModel'
    ],

    title: 'Перелік курсів, де є викладання',
    itemId: 'courseProfboardCenterList',
    
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



