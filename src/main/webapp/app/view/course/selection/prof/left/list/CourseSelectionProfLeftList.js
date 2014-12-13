Ext.define('Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftList', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.prof.left.list',
    controller: 'course.selection.prof.left.list',
    viewModel: {
        type: 'course.selection.prof.left.list'
    },
    requires: [
        'Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListController',
        'Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListModel'
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
                    text: 'Поточний курс №1 у списку викладача',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleProf'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Поточний курс №2 у списку викладача',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleProf'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Поточний курс №3 у списку викладача',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingleProf'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },                
                { 
                    xtype: 'menuitem',
                    text: 'Управління курсами',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseBoardProf'
                    }
                }
            ]
        }
    ]

});
