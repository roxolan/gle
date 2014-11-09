Ext.define('Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.manage.board.left.panel',
    controller: 'manage.board.left.panel',
    viewModel: {
        type: 'manage.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanelController',
        'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanelModel'
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
                    text: 'Перелік груп',
                    listeners: {
                        click: 'openGroupBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Перелік курсів',
                    listeners: {
                        click: 'openCourseBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Перелік спільнот',
                    listeners: {
                        click: 'openCommunityBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Статистика',
                    listeners: {
                        click: 'onStatisticsClick'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Календар',
                    listeners: {
                        click: 'openCalendarBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Звіти',
                    listeners: {
                        click: 'openReportBoard'
                    }
                }
            ]
        }
    ]  
});
