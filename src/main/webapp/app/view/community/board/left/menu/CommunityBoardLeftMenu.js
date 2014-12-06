Ext.define('Kmbsvle.view.community.board.left.menu.CommunityBoardLeftMenu', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.board.left.menu',
    controller: 'community.board.left.menu',
    viewModel: {
        type: 'community.board.left.menu'
    },
    requires: [
        'Kmbsvle.view.community.board.left.menu.CommunityBoardLeftMenuController',
        'Kmbsvle.view.community.board.left.menu.CommunityBoardLeftMenuModel'
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
                    text: 'Спільнота №1',
                    listeners: {
                        click: 'openCommunitySingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Спільнота №2',
                    listeners: {
                        click: 'openCommunitySingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Спільнота №3',
                    listeners: {
                        click: 'openCommunitySingle'
                    }
                }
            ]
        }
    ]
});
