Ext.define('Kmbsvle.view.course.single.stud.left.menu.CourseSingleStudLeftMenu', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.single.stud.left.menu',
    controller: 'course.single.stud.left.menu',
    viewModel: {
        type: 'course.single.stud.left.menu'
    },
    requires: [
        'Kmbsvle.view.course.single.stud.left.menu.CourseSingleStudLeftMenuController',
        'Kmbsvle.view.course.single.stud.left.menu.CourseSingleStudLeftMenuModel'
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
