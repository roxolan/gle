Ext.define('Kmbsvle.view.toppanel.leftnav.ToppanelLeftnav', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.toppanel.leftnav',
    requires: [
        'Kmbsvle.view.toppanel.leftnav.ToppanelLeftnavController',
        'Kmbsvle.view.toppanel.leftnav.ToppanelLeftnavModel'
    ],
    controller: 'toppanel.leftnav',
    viewModel: {
        type: 'toppanel.leftnav'
    },
  
    padding: '0 0 0 0',
    margin: '4 0 0 10',
    height: 32,
    width: 300,
    items: {
        xtype: 'menu',
        width: 300,
        id: 'toppanelleftnavmenu',      
        floating: false,
        layout: {
            type: 'hbox',
            pack: 'start'
        },
        items: [
            { 
                xtype: 'menuitem',
                reference: 'leftnav_learn',
                glyph: 'xf02d@FontAwesome',
                overCls: 'hoveronname',
                margin: '0 15 0 0',
                listeners: {
                    click: 'openLearnBoard'
                }
            },
            { 
                xtype: 'menuitem',
                reference: 'leftnav_social',
                glyph: 'xf0c0@FontAwesome',
                overCls: 'hoveronname',
                margin: '0 15 0 0',
                listeners: {
                    click: 'openSocialBoard'
                }
            },
            { 
                xtype: 'menuitem',
                reference: 'leftnav_calendar',
                glyph: 'xf073@FontAwesome',
                overCls: 'hoveronname',
                margin: '0 15 0 0',
                listeners: {
                    click: 'openCalendarBoard'
                }
            }
        ]
    }
});
