Ext.define('Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.board.alum.center.list',
    
    controller: 'course.board.alum.center.list',
    viewModel: {
        type: 'course.board.alum.center.list'
    },
    requires: [
        'Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterListController',
        'Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterListModel'
    ],

    title: 'Перелік курсів учасника',
    itemId: 'courseBoardAlumCenterList',
    
    bind: {
        store: '{coursealumlist}'
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
        }
    ],
    
    listeners: {
        viewready: 'initStore',
        rowclick: 'selectCourse'
    }
  
});



