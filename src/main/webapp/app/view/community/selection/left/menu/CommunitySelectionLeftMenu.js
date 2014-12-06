Ext.define('Kmbsvle.view.community.selection.left.menu.CommunitySelectionLeftMenu', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.selection.left.menu',
    controller: 'community.selection.left.menu',
    viewModel: {
        type: 'community.selection.left.menu'
    },
    requires: [
        'Kmbsvle.view.community.selection.left.menu.CommunitySelectionLeftMenuController',
        'Kmbsvle.view.community.selection.left.menu.CommunitySelectionLeftMenuModel'
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
                    glyph: 'xf0c0@FontAwesome',
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
                    glyph: 'xf0c0@FontAwesome',
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
                    glyph: 'xf0c0@FontAwesome',
                    listeners: {
                        click: 'openCommunitySingle'
                    }
                }
            ]
        }
    ]
});
