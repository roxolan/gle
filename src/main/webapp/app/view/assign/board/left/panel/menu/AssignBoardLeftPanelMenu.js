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
    
  ]

});
