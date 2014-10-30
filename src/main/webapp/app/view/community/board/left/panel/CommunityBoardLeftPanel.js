Ext.define('Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.community.board.left.panel',
  controller: 'community.board.left.panel',
  viewModel: {
    type: 'community.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanelController',
    'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanelModel',
    'Kmbsvle.view.community.board.left.panel.menu.CommunityBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'community.board.left.panel.menu'
    }
  ]
  
});
