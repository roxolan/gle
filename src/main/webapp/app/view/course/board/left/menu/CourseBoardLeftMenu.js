Ext.define('Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.left.menu',
    controller: 'course.board.left.menu',
    viewModel: {
        type: 'course.board.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenuController',
        'Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenuModel'
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
                    text: 'Курс №1',
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
                    text: 'Курс №2',
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
                    text: 'Курс №3',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                }
            ]
        }
    ]       
});
