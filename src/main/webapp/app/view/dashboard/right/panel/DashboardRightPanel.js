Ext.define('Kmbsvle.view.dashboard.right.panel.DashboardRightPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.dashboard.right.panel',
    controller: 'dashboard.right.panel',
    viewModel: {
        type: 'dashboard.right.panel'
    },
    header: false,
    html: 'Properties Zone for the Dashboard',
    width: 200,
    bodyPadding: 10

});
