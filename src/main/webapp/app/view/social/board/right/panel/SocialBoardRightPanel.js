Ext.define('Kmbsvle.view.social.board.right.panel.SocialBoardRightPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.social.board.right.panel',

  controller: 'social.board.right.panel',
  viewModel: {
    type: 'social.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.social.board.right.panel.SocialBoardRightPanelController',
    'Kmbsvle.view.social.board.right.panel.SocialBoardRightPanelModel'  
  ],
  header: false,
  html: 'Settings for my Communities',
  width: 200,
  bodyPadding: 10

});
