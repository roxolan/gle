Ext.define('Kmbsvle.view.message.board.left.panel.menu.MessageBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.message.board.left.panel.menu',
  
  controller: 'message.board.left.panel.menu',
  viewModel: {
    type: 'message.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.message.board.left.panel.menu.MessageBoardLeftPanelMenuController',
    'Kmbsvle.view.message.board.left.panel.menu.MessageBoardLeftPanelMenuModel'
  ],
  
  width: 250,
  floating: false,
  items: [
    { 
      xtype: 'menuitem',
      reference: 'message_board_message_single',
      text: 'Повідомлення 1',
      listeners: {
        click: 'openMessageSingleWindow'
      }
    }

  ]

});
