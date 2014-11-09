Ext.define('Kmbsvle.view.event.single.center.panel.EventSingleCenterPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.event.single.center.panel',
    controller: 'event.single.center.panel',
    viewModel: {
        type: 'event.single.center.panel'
    },
    requires: [
        'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanelController',
        'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanelModel'
    ],
    html: 'Particular Event -- Окрема подія',
    bodyPadding: 10

});
