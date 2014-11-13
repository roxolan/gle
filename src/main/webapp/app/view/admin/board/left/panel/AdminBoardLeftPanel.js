Ext.define('Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.admin.board.left.panel',
    controller: 'admin.board.left.panel',
    viewModel: {
        type: 'admin.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelController',
        'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelModel'
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
                    text: 'Управління користувачами',
                    glyph: 'xf03a@FontAwesome',
                    listeners: {
                        click: 'openAuthBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Навчальні групи',
                    glyph: 'xf10c@FontAwesome',
                    listeners: {
                        click: 'openGroupBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Бібліотека',
                    glyph: 'xf02d@FontAwesome',
                    listeners: {
                        click: 'openLibraryBoard'
                    }
                }
            ]
        }
    ]
});
