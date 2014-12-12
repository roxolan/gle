Ext.define('Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftList', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.stud.left.list',
    controller: 'course.selection.stud.left.list',
    viewModel: {
        type: 'course.selection.stud.left.list'
    },
    requires: [
        'Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftListController',
        'Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftListModel'
    ],  
  
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    text: 'Поточний курс №1 у списку учасника',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleStud'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Поточний курс №2 у списку учасника',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleStud'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Поточний курс №3 у списку учасника',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleStud'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },                
                { 
                    xtype: 'menuitem',
                    text: 'Панель курсів',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseBoardStud'
                    }
                }
            ]
        }
    ]

});
