Ext.define('Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.community.single.left.panel',
  controller: 'community.single.left.panel',
  viewModel: {
    type: 'community.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanelController',
    'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanelModel',
    'Kmbsvle.view.community.single.left.panel.menu.CommunitySingleLeftPanelMenu'

  ],
  header: false,
  width: 250,
  items: [
      {
        xtype: 'community.single.left.panel.menu'
      }
  ]
});
