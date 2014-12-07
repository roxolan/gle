Ext.define('Kmbsvle.view.course.selection.left.list.CourseSelectionLeftList', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.left.list',
    controller: 'course.selection.left.list',
    viewModel: {
        type: 'course.selection.left.list'
    },
    requires: [
        'Kmbsvle.view.course.selection.left.list.CourseSelectionLeftListController',
        'Kmbsvle.view.course.selection.left.list.CourseSelectionLeftListModel'
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
                    text: 'Курс №1 у списку',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Курс №2 у списку',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Курс №3 у списку',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                }
            ]
        }
    ]

});
