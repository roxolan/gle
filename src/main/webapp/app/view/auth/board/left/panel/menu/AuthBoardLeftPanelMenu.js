Ext.define('Kmbsvle.view.auth.board.left.panel.menu.AuthBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.auth.board.left.panel.menu',
  
  controller: 'auth.board.left.panel.menu',
  viewModel: {
    type: 'auth.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.auth.board.left.panel.menu.AuthBoardLeftPanelMenuController',
    'Kmbsvle.view.auth.board.left.panel.menu.AuthBoardLeftPanelMenuModel'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'auth_board_user_board',
      text: 'Користувачі',
      listeners: {
        click: 'openUserBoard'
      }
    }

  ]

});
