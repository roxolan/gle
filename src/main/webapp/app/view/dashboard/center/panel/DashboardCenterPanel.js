Ext.define('Kmbsvle.view.dashboard.center.panel.DashboardCenterPanel', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.dashboard.center.panel',
    requires: [
        'Ext.XTemplate',
        'Kmbsvle.view.dashboard.center.panel.DashboardCenterPanelController',
        'Kmbsvle.view.dashboard.center.panel.DashboardCenterPanelModel'
    ],
    controller: 'dashboard.center.panel',
    viewModel: {
        type: 'dashboard.center.panel'
    },
    autoScroll: true,
    bodyPadding: 10,
    
    initComponent: function() {
        var me = this;
        var tpl = new Ext.XTemplate(
                '<tpl for=".">', 
                '<p>Welcome, <b>{fullName}</b>!</p>',
                '</tpl>'); 
                
        var welcomeHtml = tpl.apply(Kmbsvle.getApplication().getUser());
        
        Ext.applyIf(me, {
            items: [
                {
                    title: 'Навчання',
                    html: welcomeHtml
                },
                {
                    title: ' Спільнота',
                    html: '<h3>A bit smaller heading, #3</h3>'
                }
            ]
        });
        me.callParent(arguments);            
    }
});
