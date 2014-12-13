Ext.define('Kmbsvle.view.course.board.stud.left.menu.CourseBoardStudLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.stud.left.menu',
    controller: 'course.board.stud.left.menu',
    viewModel: {
        type: 'course.board.stud.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.board.stud.left.menu.CourseBoardStudLeftMenuController',
        'Kmbsvle.view.course.board.stud.left.menu.CourseBoardStudLeftMenuModel'
    ],
    itemId: 'courseBoardStudLeftMenu',
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
                    text: 'Поточні курси',
                    listeners: {
                        click: 'openCourseBoardStud'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf03a@FontAwesome',
                    text: 'Завершені курси',
                    listeners: {
                        click: 'openCourseBoardStud'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
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



