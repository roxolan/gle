Ext.define('Kmbsvle.view.community.board.center.panel.CommunityBoardCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.board.center.panel',
  controller: 'community.board.center.panel',
  viewModel: {
    type: 'community.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.community.board.center.panel.CommunityBoardCenterPanelController',
    'Kmbsvle.view.community.board.center.panel.CommunityBoardCenterPanelModel'
  ],

  bodyPadding: 10,
  title: 'Communities',
  
  html: 'Communities Board, general (not personal) view, called from Manage facilities'

});
