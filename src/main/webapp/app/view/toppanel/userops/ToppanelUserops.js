Ext.define('Kmbsvle.view.toppanel.userops.ToppanelUserops', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.toppanel.userops',
    requires: [
        'Kmbsvle.view.toppanel.userops.ToppanelUseropsController',
        'Kmbsvle.view.toppanel.userops.ToppanelUseropsModel'
    ],
  
    controller: 'toppanel.userops',
    viewModel: {
        type: 'toppanel.userops'
    },
    padding: '0 0 0 0',
    margin: '4 30 0 0',
    height: 32,
    width: 210,
    overCls: 'hoveronname',
    items: {
        xtype: 'menu',
        width: 210,
        id: 'toppaneluseropsmenu',      
        floating: false,
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items: [
            { 
                xtype: 'menuitem',
                reference: 'userops_username',
                glyph: 'xf007@FontAwesome',
                listeners: {
                    click: 'openProfileEdit'
                }
            }
        ]
    }
    
});
