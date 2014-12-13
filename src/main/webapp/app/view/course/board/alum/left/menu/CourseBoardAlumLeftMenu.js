Ext.define('Kmbsvle.view.course.board.alum.left.menu.CourseBoardAlumLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.alum.left.menu',
    controller: 'course.board.alum.left.menu',
    viewModel: {
        type: 'course.board.alum.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.board.alum.left.menu.CourseBoardAlumLeftMenuController',
        'Kmbsvle.view.course.board.alum.left.menu.CourseBoardAlumLeftMenuModel'
    ],
    itemId: 'courseBoardAlumLeftMenu',
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
                    text: 'Повний перелік курсів',
                    listeners: {
                        click: 'openCourseBoardStud'
                    }
                }
            ]
        }
    ]       
});



