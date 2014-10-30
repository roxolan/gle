Ext.define('Kmbsvle.view.group.single.center.panel.GroupSingleCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.group.single.center.panel',
  controller: 'group.single.center.panel',
  viewModel: {
    type: 'group.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.group.single.center.panel.GroupSingleCenterPanelController',
    'Kmbsvle.view.group.single.center.panel.GroupSingleCenterPanelModel'
  ],
  
  autoScroll: true,
  bodyPadding: 10,
  items:[
    {
      itemId: 'firstTab',
      title: 'Події групи',
      html: '<h2>Content appropriate for the current navigation.</h2>',
      listeners: {
        onConfirm: function(){
          console.log('Listener in the tab clicked');
        }
      }
    },
    {
      itemId: 'secondTab',
      title: 'Матеріали',
      html: '<h3>A bit smaller heading, #3</h3>'
    }]
  
});
