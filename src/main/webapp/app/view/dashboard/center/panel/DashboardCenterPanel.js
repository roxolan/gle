Ext.define('Kmbsvle.view.dashboard.center.panel.DashboardCenterPanel', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.dashboard.center.panel',
    requires: [
        'Kmbsvle.view.dashboard.center.panel.DashboardCenterPanelController',
        'Kmbsvle.view.dashboard.center.panel.DashboardCenterPanelModel'
    ],
    controller: 'dashboard.center.panel',
    viewModel: {
        type: 'dashboard.center.panel'
    },
    autoScroll: true,
    bodyPadding: 10,
    items:[{
        title: 'Навчання',
        html: '<h2>First tab content</h2>'
    },
    {
        title: ' Спільнота',
        html: '<h3>A bit smaller heading, #3</h3>'
    }]

});
