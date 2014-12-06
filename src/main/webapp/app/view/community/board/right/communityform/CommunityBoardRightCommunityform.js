Ext.define('Kmbsvle.view.community.board.right.communityform.CommunityBoardRightCommunityform', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.board.right.communityform',
  controller: 'community.board.right.communityform',
  viewModel: {
    type: 'community.board.right.communityform'
  },
  requires: [
    'Kmbsvle.view.community.board.right.communityform.CommunityBoardRightCommunityformController',
    'Kmbsvle.view.community.board.right.communityform.CommunityBoardRightCommunityformModel'
  ],
  header: false,
  html: 'Settings for Communities Board', 
  width: 200,
  bodyPadding: 10
  
});
