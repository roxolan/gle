Ext.define('Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.lgroup.single.right.panel',
  controller: 'lgroup.single.right.panel',
  viewModel: {
    type: 'lgroup.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanelController',
    'Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanelModel'
  ],
  header: false,
  html: 'Properties Zone for the Group',
  width: 200,
  bodyPadding: 10

});
