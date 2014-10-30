Ext.define('Kmbsvle.view.assign.single.center.panel.AssignSingleCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.assign.single.center.panel',
  controller: 'assign.single.center.panel',
  viewModel: {
    type: 'assign.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.assign.single.center.panel.AssignSingleCenterPanelController',
    'Kmbsvle.view.assign.single.center.panel.AssignSingleCenterPanelModel'
  ],

  html: 'Assignment -- Завдання',
  bodyPadding: 10
  
});
