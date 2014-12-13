Ext.define('Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterList', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.course.board.stud.center.list',
    
    controller: 'course.board.stud.center.list',
    viewModel: {
        type: 'course.board.stud.center.list'
    },
    requires: [
        'Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterListController',
        'Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterListModel'
    ],

    title: 'Перелік курсів учасника',
    itemId: 'courseBoardStudCenterList',
    
    bind: {
        store: '{coursestudlist}'
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



