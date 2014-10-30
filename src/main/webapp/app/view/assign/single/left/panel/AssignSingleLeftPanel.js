Ext.define('Kmbsvle.view.assign.single.left.panel.AssignSingleLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.assign.single.left.panel',
  controller: 'assign.single.left.panel',
  viewModel: {
    type: 'assign.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.assign.single.left.panel.AssignSingleLeftPanelController',
    'Kmbsvle.view.assign.single.left.panel.AssignSingleLeftPanelModel'
  ],

  header: false,
  html: 'Properties Zone for an Assignment',
  width: 150,
  bodyPadding: 10
});
