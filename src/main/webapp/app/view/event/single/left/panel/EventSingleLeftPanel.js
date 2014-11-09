Ext.define('Kmbsvle.view.event.single.left.panel.EventSingleLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.event.single.left.panel',
    controller: 'event.single.left.panel',
    viewModel: {
        type: 'event.single.left.panel'
    },
    requires: [
        'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanelController',
        'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanelModel'
    ],
    header: false,
    html: 'Left Properties Zone for a Single Event',
    width: 150,
    bodyPadding: 10
});
