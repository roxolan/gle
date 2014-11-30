Ext.define('Kmbsvle.view.lgroup.single.center.panel.LgroupSingleCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.lgroup.single.center.panel',
  controller: 'lgroup.single.center.panel',
  viewModel: {
    type: 'lgroup.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.lgroup.single.center.panel.LgroupSingleCenterPanelController',
    'Kmbsvle.view.lgroup.single.center.panel.LgroupSingleCenterPanelModel'
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
