Ext.define('Kmbsvle.view.dashboard.left.panel.DashboardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.dashboard.left.panel',
    requires: [
        'Kmbsvle.view.dashboard.left.panel.DashboardLeftPanelController',
        'Kmbsvle.view.dashboard.left.panel.DashboardLeftPanelModel'
    ],
    controller: 'dashboard.left.panel',
    viewModel: {
        type: 'dashboard.left.panel'
    },
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    text: 'Місце менеджера',
                    listeners: {
                        click: 'openManageBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Місце адміністратора',
                    listeners: {
                        click: 'openAdminBoard'
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
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Повідомлення',
                    listeners: {
                        click: 'openMessageBoard'
                    }
                }
            ]
        }
    ]

});
