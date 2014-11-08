Ext.define('Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.auth.board.left.panel',
  controller: 'auth.board.left.panel',
  viewModel: {
    type: 'auth.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelController',
    'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelModel'
  ],

  header: false,
  width: 250,
  reference: 'authBoardLeftPanel',
  items: [
    {
        xtype: 'menu',
        width: 250,
        floating: false,
        items: [
            { 
                xtype: 'menuitem',
                reference: 'auth_board_user_board',
                text: 'Користувачі',
                listeners: {
                    click: 'openUserBoard',
                    scope: 'controller'
                }
            }
        ]
    }
  ]

});
