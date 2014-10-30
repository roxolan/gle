Ext.define('Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.content.board.left.panel',
  controller: 'content.board.left.panel',
  viewModel: {
    type: 'content.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanelController',
    'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanelModel',
    'Kmbsvle.view.content.board.left.panel.menu.ContentBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'content.board.left.panel.menu'
    }
  ]

});
