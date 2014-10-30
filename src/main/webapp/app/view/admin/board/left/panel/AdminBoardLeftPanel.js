Ext.define('Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.admin.board.left.panel',
  controller: 'admin.board.left.panel',
  viewModel: {
    type: 'admin.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelController',
    'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelModel',
    'Kmbsvle.view.admin.board.left.panel.menu.AdminBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'admin.board.left.panel.menu'
    }
  ]

});
