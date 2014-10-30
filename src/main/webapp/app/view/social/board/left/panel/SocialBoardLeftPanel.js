Ext.define('Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.social.board.left.panel',
  controller: 'social.board.left.panel',
  viewModel: {
    type: 'social.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanelController',
    'Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanelModel',
    'Kmbsvle.view.social.board.left.panel.menu.SocialBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
      {
        xtype: 'social.board.left.panel.menu'
      }
  ]
});
