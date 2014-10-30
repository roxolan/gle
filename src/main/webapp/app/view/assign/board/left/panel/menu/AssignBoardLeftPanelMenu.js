Ext.define('Kmbsvle.view.assign.board.left.panel.menu.AssignBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.assign.board.left.panel.menu',
  
  controller: 'assign.board.left.panel.menu',
  viewModel: {
    type: 'assign.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.assign.board.left.panel.menu.AssignBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'assign_board_assignment_1',
      text: 'Завдання №1',
      listeners: {
        click: 'openAssignment'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'assign_board_assignment_2',
      text: 'Завдання №2',
      listeners: {
        click: 'openAssignment'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'assign_board_assignment_3',
      text: 'Завдання №3',
      listeners: {
        click: 'openAssignment'
      }
    }

  ]

});
