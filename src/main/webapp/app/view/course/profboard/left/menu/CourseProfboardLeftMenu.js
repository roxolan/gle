Ext.define('Kmbsvle.view.course.profboard.left.menu.CourseProfboardLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.profboard.left.menu',
    controller: 'course.profboard.left.menu',
    viewModel: {
        type: 'course.profboard.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.profboard.left.menu.CourseProfboardLeftMenuController',
        'Kmbsvle.view.course.profboard.left.menu.CourseProfboardLeftMenuModel'
    ],
    itemId: 'courseProfboardLeftMenu',
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
                        click: 'openCourseProfboard'
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
                        click: 'openCourseProfboard'
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
                        click: 'openCourseProfboard'
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
                        click: 'createCourse'
                    }
                }
            ]
        }
    ]       
});



