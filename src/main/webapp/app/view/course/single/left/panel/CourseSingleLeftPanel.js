Ext.define('Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.single.left.panel',
    controller: 'course.single.left.panel',
    viewModel: {
        type: 'course.single.left.panel'
    },
    requires: [
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanelController',
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanelModel'
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
