Ext.define('Kmbsvle.view.manage.board.right.panel.ManageBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.manage.board.right.panel',
  controller: 'manage.board.right.panel',
  viewModel: {
    type: 'manage.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.manage.board.right.panel.ManageBoardRightPanelController',
    'Kmbsvle.view.manage.board.right.panel.ManageBoardRightPanelModel'
  ],
  header: false,
  html: 'Properties Zone for the Manage Board',
  width: 200,
  bodyPadding: 10
  
});
