Ext.define('Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.lgroup.board.left.menu',
    controller: 'lgroup.board.left.menu',
    viewModel: {
        type: 'lgroup.board.left.menu'
    },
    requires: [
        'Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenuController',
        'Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenuModel'
    ],
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    glyph: 'xf03a@FontAwesome',
                    text: 'Загальний список',
                    listeners: {
                        click: 'openLgroupBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf055@FontAwesome',
                    text: 'Додати навчальну групу',
                    listeners: {
                        click: 'addLgroup'
                    }
                }
            ]
        }
    ]
});
