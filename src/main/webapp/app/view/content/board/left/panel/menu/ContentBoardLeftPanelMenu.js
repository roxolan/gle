Ext.define('Kmbsvle.view.content.board.left.panel.menu.ContentBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.content.board.left.panel.menu',
  
  controller: 'content.board.left.panel.menu',
  viewModel: {
    type: 'content.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.content.board.left.panel.menu.ContentBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'content_board_content_1',
      text: 'Матеріал №1',
      listeners: {
        click: 'openContentSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'content_board_content_2',
      text: 'Матеріал №2',
      listeners: {
        click: 'openContentSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'content_board_content_3',
      text: 'Матеріал №3',
      listeners: {
        click: 'openContentSingle'
      }
    }

  ]

});
