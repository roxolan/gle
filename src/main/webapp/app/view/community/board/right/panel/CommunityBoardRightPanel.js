Ext.define('Kmbsvle.view.community.board.right.panel.CommunityBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.board.right.panel',
  controller: 'community.board.right.panel',
  viewModel: {
    type: 'community.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.community.board.right.panel.CommunityBoardRightPanelController',
    'Kmbsvle.view.community.board.right.panel.CommunityBoardRightPanelModel'
  ],
  header: false,
  html: 'Settings for Communities Board', 
  width: 200,
  bodyPadding: 10
  
});
