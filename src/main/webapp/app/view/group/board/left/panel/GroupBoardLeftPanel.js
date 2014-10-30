Ext.define('Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.group.board.left.panel',
  controller: 'group.board.left.panel',
  viewModel: {
    type: 'group.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanelController',
    'Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanelModel',
    'Kmbsvle.view.group.board.left.panel.menu.GroupBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'group.board.left.panel.menu'
    }
  ]

});
