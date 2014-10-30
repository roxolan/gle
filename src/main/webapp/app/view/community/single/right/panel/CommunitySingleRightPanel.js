Ext.define('Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.single.right.panel',
  controller: 'community.single.right.panel',
  viewModel: {
    type: 'community.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanelController',
    'Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanelModel'
  ],
  
  header: false,
  html: 'Properties Zone for a particular Community',
  width: 200,
  bodyPadding: 10
  
});
