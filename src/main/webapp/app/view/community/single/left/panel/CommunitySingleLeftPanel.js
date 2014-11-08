Ext.define('Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.single.left.panel',
    controller: 'community.single.left.panel',
    viewModel: {
        type: 'community.single.left.panel'
    },
    requires: [
        'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanelController',
        'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanelModel'
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
                    text: 'Події спільноти',
                    listeners: {
                        click: 'openEventsBoard'
                    }
                }
            ]
        }
    ]
});
