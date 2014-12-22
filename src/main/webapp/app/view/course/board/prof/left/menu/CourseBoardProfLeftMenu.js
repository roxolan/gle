Ext.define('Kmbsvle.view.course.board.prof.left.menu.CourseBoardProfLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.prof.left.menu',
    controller: 'course.board.prof.left.menu',
    viewModel: {
        type: 'course.board.prof.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.board.prof.left.menu.CourseBoardProfLeftMenuController',
        'Kmbsvle.view.course.board.prof.left.menu.CourseBoardProfLeftMenuModel'
    ],
    itemId: 'courseBoardProfLeftMenu',
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
                    text: 'Поточні курси / викладання',
                    listeners: {
                        click: 'openCourseBoardProf'
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
                        click: 'openCourseBoardProf'
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
                        click: 'openCourseBoardProf'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf055@FontAwesome',
                    text: 'Створити курс',
                    listeners: {
                        click: 'createCourseModal'
                    }
                }
            ]
        }
    ]       
});



