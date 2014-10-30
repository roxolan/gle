Ext.define('Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.group.single.left.panel',
  controller: 'group.single.left.panel',
  viewModel: {
    type: 'group.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanelController',
    'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanelModel',
    'Kmbsvle.view.group.single.left.panel.menu.GroupSingleLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
      {
        xtype: 'group.single.left.panel.menu'
      }
  ]
});
