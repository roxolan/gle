Ext.define('Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.message.board.left.panel',
  controller: 'message.board.left.panel',
  viewModel: {
    type: 'message.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanelController',
    'Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanelModel',
    'Kmbsvle.view.message.board.left.panel.menu.MessageBoardLeftPanelMenu'
  ],

  header: false,
  width: 250,
  items: [
    {
      xtype: 'message.board.left.panel.menu'
    }
  ]


});
