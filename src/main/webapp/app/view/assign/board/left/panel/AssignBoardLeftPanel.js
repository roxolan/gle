Ext.define('Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.assign.board.left.panel',
    controller: 'assign.board.left.panel',
    viewModel: {
        type: 'assign.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanelController',
        'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanelModel'
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
                    text: 'Завдання №1',
                    listeners: {
                        click: 'openAssignment'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Завдання №2',
                    listeners: {
                        click: 'openAssignment'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Завдання №3',
                    listeners: {
                        click: 'openAssignment'
                    }
                }
            ]
        }
    ]
});
