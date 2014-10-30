Ext.define('Kmbsvle.view.event.single.right.panel.EventSingleRightPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.event.single.right.panel',
    controller: 'event.single.right.panel',
    viewModel: {
        type: 'event.single.right.panel'
    },
    header: false,
    html: 'Settings for Single Event',
    width: 200,
    bodyPadding: 10

});
