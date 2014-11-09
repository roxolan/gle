Ext.define('Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.group.single.left.panel',
    controller: 'group.single.left.panel',
    viewModel: {
        type: 'group.single.left.panel'
    },
    requires: [
        'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanelController',
        'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanelModel'
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
                    text: 'Оголошення'
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Обговорення' 
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Матеріали' 
                },
                { 
                    xtype: 'menuseparator' 
                },
                {
                    xtype: 'menuitem',
                    text: 'Окрема подія',
                    listeners: {
                        click: 'openEventSingle'
                    }
                }
            ]
        }
    ]
});
