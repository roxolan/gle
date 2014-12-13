Ext.define('Kmbsvle.view.course.single.prof.left.menu.CourseSingleProfLeftMenu', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.single.prof.left.menu',
    controller: 'course.single.prof.left.menu',
    viewModel: {
        type: 'course.single.prof.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.single.prof.left.menu.CourseSingleProfLeftMenuController',
        'Kmbsvle.view.course.single.prof.left.menu.CourseSingleProfLeftMenuModel'
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
                    text: 'Матеріали',
                    listeners: {
                        click: 'openContentBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Завдання',
                    listeners: {
                        click: 'openAssignBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Чат',
                    listeners: {
                        click: 'openChatBoard'
                    }
                }
            ]
        }
    ]
});
