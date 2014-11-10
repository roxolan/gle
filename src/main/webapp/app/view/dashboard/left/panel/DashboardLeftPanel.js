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
                    text: 'Повідомлення',
                    listeners: {
                        click: 'openMessageBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                }
            ]
        }
    ]

});
