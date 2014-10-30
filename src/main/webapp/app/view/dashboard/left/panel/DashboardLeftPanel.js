Ext.define('Kmbsvle.view.dashboard.left.panel.DashboardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.dashboard.left.panel',
    controller: 'dashboard.left.panel',
    viewModel: {
        type: 'dashboard.left.panel'
    },
    header: false,
    width: 250,
    items: [
        {
            xtype: 'dashboard.left.panel.menu'
        }
    ]

});
