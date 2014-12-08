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
    itemId: 'courseBoardLeftMenu',
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    glyph: 'xf03a@FontAwesome',
                    text: 'Загальний список курсів',
                    listeners: {
                        click: 'openCourseBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf055@FontAwesome',
                    text: 'Додати курс',
                    listeners: {
                        click: 'addCourse'
                    }
                }
            ]
        }
    ]       
});
