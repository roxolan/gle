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
                    glyph: 'xf03a@FontAwesome',
                    text: 'Загальний список',
                    listeners: {
                        click: 'openLgroupBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf055@FontAwesome',
                    text: 'Додати навчальну групу',
                    listeners: {
                        click: 'addLgroup'
                    }
                }
            ]
        }
    ]
});
