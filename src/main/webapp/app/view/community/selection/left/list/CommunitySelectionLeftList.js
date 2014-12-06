Ext.define('Kmbsvle.view.community.selection.left.list.CommunitySelectionLeftList', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.community.selection.left.list',
    controller: 'community.selection.left.list',
    viewModel: {
        type: 'community.selection.left.list'
    },
    requires: [
        'Kmbsvle.view.community.selection.left.list.CommunitySelectionLeftListController',
        'Kmbsvle.view.community.selection.left.list.CommunitySelectionLeftListModel'
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
                    text: 'Спільнота №1 у списку',
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
                    text: 'Спільнота №2 у списку',
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
                    text: 'Спільнота №3 у списку',
                    glyph: 'xf0c0@FontAwesome',
                    listeners: {
                        click: 'openCommunitySingle'
                    }
                }
            ]
        }
    ]
});
