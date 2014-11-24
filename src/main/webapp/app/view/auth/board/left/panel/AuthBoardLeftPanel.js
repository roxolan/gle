Ext.define('Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.auth.board.left.panel',
  requires: [
    'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelController',
    'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelModel'
  ],
  controller: 'auth.board.left.panel',
  viewModel: {
    type: 'auth.board.left.panel'
  },

  itemId: 'authBoardLeftPanel',
  header: false,
  width: 250,
  items: [
    {
        xtype: 'menu',
        width: 250,
        floating: false,
        items: [
            { 
                xtype: 'menuitem',
                glyph: 'xf03a@FontAwesome',
                text: 'Загальний список',
                listeners: {
                    click: 'openUserBoard'
                }
            },
            { 
                xtype: 'menuseparator' 
            },
            { 
                xtype: 'menuitem',
                glyph: 'xf055@FontAwesome',
                text: 'Додати користувача',
                listeners: {
                    click: 'addUser'
                }
            }
        ]
    }
  ]

});
