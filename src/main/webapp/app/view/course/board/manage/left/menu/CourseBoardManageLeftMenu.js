Ext.define('Kmbsvle.view.course.board.manage.left.menu.CourseBoardManageLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.manage.left.menu',
    controller: 'course.board.manage.left.menu',
    viewModel: {
        type: 'course.board.manage.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.board.manage.left.menu.CourseBoardManageLeftMenuController',
        'Kmbsvle.view.course.board.manage.left.menu.CourseBoardManageLeftMenuModel'
    ],
    itemId: 'courseBoardManageLeftMenu',
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
