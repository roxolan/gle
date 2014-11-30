Ext.define('Kmbsvle.view.lgroup.board.left.panel.LgroupBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.lgroup.board.left.panel',
    controller: 'lgroup.board.left.panel',
    viewModel: {
        type: 'lgroup.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.lgroup.board.left.panel.LgroupBoardLeftPanelController',
        'Kmbsvle.view.lgroup.board.left.panel.LgroupBoardLeftPanelModel'
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
                        click: 'openLgroupSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Група №2',
                    listeners: {
                        click: 'openLgroupSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Група №3',
                    listeners: {
                        click: 'openLgroupSingle'
                    }
                }
            ]
        }
    ]
});
