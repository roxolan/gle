Ext.define('Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.board.left.panel',
    controller: 'community.board.left.panel',
    viewModel: {
        type: 'community.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanelController',
        'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanelModel'
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
