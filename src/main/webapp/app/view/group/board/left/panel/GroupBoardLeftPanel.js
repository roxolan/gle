Ext.define('Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.group.board.left.panel',
    controller: 'group.board.left.panel',
    viewModel: {
        type: 'group.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanelController',
        'Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanelModel'
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
                    text: 'Група №1',
                    listeners: {
                        click: 'openGroupSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Група №2',
                    listeners: {
                        click: 'openGroupSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Група №3',
                    listeners: {
                        click: 'openGroupSingle'
                    }
                }
            ]
        }
    ]
});
