Ext.define('Kmbsvle.view.admin.board.left.panel.menu.AdminBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.admin.board.left.panel.menu',
  
  controller: 'admin.board.left.panel.menu',
  viewModel: {
    type: 'admin.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.admin.board.left.panel.menu.AdminBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'admin_board_auth_board',
      text: 'Автентифікація',
      listeners: {
        click: 'openAuthBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'admin_board_group_board',
      text: 'Групи',
      listeners: {
        click: 'openGroupBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'admin_board_library_board',
      text: 'Бібліотека',
      listeners: {
        click: 'openLibraryBoard'
      }
    }

  ]

});
