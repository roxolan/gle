Ext.define('Kmbsvle.view.community.board.center.communitylist.CommunityBoardCenterCommunitylist', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.board.center.communitylist',
  controller: 'community.board.center.communitylist',
  viewModel: {
    type: 'community.board.center.communitylist'
  },
  requires: [
    'Kmbsvle.view.community.board.center.communitylist.CommunityBoardCenterCommunitylistController',
    'Kmbsvle.view.community.board.center.communitylist.CommunityBoardCenterCommunitylistModel'
  ],

  bodyPadding: 10,
  title: 'Communities',
  
  html: 'Communities Board, general (not personal) view, called from Manage facilities'

});
