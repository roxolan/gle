Ext.define('Kmbsvle.view.community.board.left.panel.menu.CommunityBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.community.board.left.panel.menu',
  
  controller: 'community.board.left.panel.menu',
  viewModel: {
    type: 'community.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.community.board.left.panel.menu.CommunityBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'community_board_community_1',
      text: 'Спільнота №1',
      listeners: {
        click: 'openCommunitySingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'community_board_community_2',
      text: 'Спільнота №2',
      listeners: {
        click: 'openCommunitySingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'community_board_community_3',
      text: 'Спільнота №3',
      listeners: {
        click: 'openCommunitySingle'
      }
    }

  ]

});
