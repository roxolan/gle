Ext.define('Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.assign.board.left.panel',
  controller: 'assign.board.left.panel',
  viewModel: {
    type: 'assign.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanelController',
    'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanelModel',
    'Kmbsvle.view.assign.board.left.panel.menu.AssignBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'assign.board.left.panel.menu'
    }
  ]

});
