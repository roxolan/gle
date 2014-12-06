Ext.define('Kmbsvle.view.auth.board.left.menu.AuthBoardLeftMenu', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.auth.board.left.menu',
  requires: [
    'Kmbsvle.view.auth.board.left.menu.AuthBoardLeftMenuController',
    'Kmbsvle.view.auth.board.left.menu.AuthBoardLeftMenuModel'
  ],
  controller: 'auth.board.left.menu',
  viewModel: {
    type: 'auth.board.left.menu'
  },

  itemId: 'authBoardLeftMenu',
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
