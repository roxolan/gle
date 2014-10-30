Ext.define('Kmbsvle.view.group.board.left.panel.menu.GroupBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.group.board.left.panel.menu',
  
  controller: 'group.board.left.panel.menu',
  viewModel: {
    type: 'group.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.group.board.left.panel.menu.GroupBoardLeftPanelMenuController'    
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'group_board_group_1',
      text: 'Група №1',
      listeners: {
        click: 'openGroupSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'group_board_group_2',
      text: 'Група №2',
      listeners: {
        click: 'openGroupSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'group_board_group_3',
      text: 'Група №3',
      listeners: {
        click: 'openGroupSingle'
      }
    }

  ]

});
