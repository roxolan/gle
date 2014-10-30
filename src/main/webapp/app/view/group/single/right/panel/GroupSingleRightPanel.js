Ext.define('Kmbsvle.view.group.single.right.panel.GroupSingleRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.group.single.right.panel',
  controller: 'group.single.right.panel',
  viewModel: {
    type: 'group.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.group.single.right.panel.GroupSingleRightPanelController',
    'Kmbsvle.view.group.single.right.panel.GroupSingleRightPanelModel'
  ],
  header: false,
  html: 'Properties Zone for the Group',
  width: 200,
  bodyPadding: 10

});
