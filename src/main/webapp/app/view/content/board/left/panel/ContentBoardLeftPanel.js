Ext.define('Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.content.board.left.panel',
    controller: 'content.board.left.panel',
    viewModel: {
        type: 'content.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanelController',
        'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanelModel'
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
                    text: 'Матеріал №1',
                    listeners: {
                        click: 'openContentSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Матеріал №2',
                    listeners: {
                        click: 'openContentSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Матеріал №3',
                    listeners: {
                        click: 'openContentSingle'
                    }
                }
            ]
        }
    ]
});
