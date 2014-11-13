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
                    text: 'Навчальні групи',
                    glyph: 'xf10c@FontAwesome',
                    listeners: {
                        click: 'openGroupBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Курси',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Спільноти',
                    glyph: 'xf0c0@FontAwesome',
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
                    glyph: 'xf080@FontAwesome',
                    listeners: {
                        click: 'onStatisticsClick'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Звіти',
                    glyph: 'xf200@FontAwesome',
                    listeners: {
                        click: 'openReportBoard'
                    }
                }
            ]
        }
    ]  
});
