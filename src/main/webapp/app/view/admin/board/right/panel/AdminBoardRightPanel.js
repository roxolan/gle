Ext.define('Kmbsvle.view.admin.board.right.panel.AdminBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.admin.board.right.panel',
  controller: 'admin.board.right.panel',
  viewModel: {
    type: 'admin.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.admin.board.right.panel.AdminBoardRightPanelController',
    'Kmbsvle.view.admin.board.right.panel.AdminBoardRightPanelModel'
  ],
  header: false,
  html: 'Settings for Administration Workplace',
  width: 200,
  bodyPadding: 10
  
});
