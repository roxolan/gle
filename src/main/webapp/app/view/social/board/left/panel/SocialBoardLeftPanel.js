Ext.define('Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.social.board.left.panel',
    controller: 'social.board.left.panel',
    viewModel: {
        type: 'social.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanelController',
        'Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanelModel'
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
                },
                { 
                    xtype: 'menuseparator' 
                },
                {
                    xtype: 'menuitem',
                    text: 'Мої спільноти',
                    listeners: {
                        click: 'openCommunityBoard'
                    }
                }
            ]
        }
    ]
});
