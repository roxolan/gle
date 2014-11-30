Ext.define('Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.lgroup.single.left.panel',
    controller: 'lgroup.single.left.panel',
    viewModel: {
        type: 'lgroup.single.left.panel'
    },
    requires: [
        'Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanelController',
        'Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanelModel'
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
