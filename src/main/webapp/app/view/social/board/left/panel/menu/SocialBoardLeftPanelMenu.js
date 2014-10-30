Ext.define('Kmbsvle.view.social.board.left.panel.menu.SocialBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',

  alias: 'widget.social.board.left.panel.menu',

  controller: 'social.board.left.panel.menu',
  viewModel: {
    type: 'social.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.social.board.left.panel.menu.SocialBoardLeftPanelMenuController',
    'Kmbsvle.view.social.board.left.panel.menu.SocialBoardLeftPanelMenuModel'
  ],

  width: 250,
  floating: false,
  items: [
    {
      xtype: 'menuitem',
      reference: 'social_board_community_01',
      text: 'Спільнота №1',
      listeners: {
        click: 'openCommunitySingle'
      }
    },
    { xtype: 'menuseparator' },
    {
      xtype: 'menuitem',
      reference: 'social_board_community_02',
      text: 'Спільнота №2',
      listeners: {
        click: 'openCommunitySingle'
      }
    },
    { xtype: 'menuseparator' },
    {
      xtype: 'menuitem',
      reference: 'social_board_community_03',
      text: 'Спільнота №3',
      listeners: {
        click: 'openCommunitySingle'
      }
    },
    { xtype: 'menuseparator' },
    {
      xtype: 'menuitem',
      reference: 'social_board_community_board',
      text: 'Мої спільноти',
      listeners: {
        click: 'openCommunityBoard'
      }
    }

  ]

});
