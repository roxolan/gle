Ext.define('Kmbsvle.view.toppanel.Toppanel', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.toppanel',
    requires: [
        'Kmbsvle.view.toppanel.leftnav.ToppanelLeftnav',
        'Kmbsvle.view.toppanel.userops.ToppanelUserops',
        'Ext.Img'
    ],

    controller: 'toppanel',

    itemId: 'topPanel',
    cls: 'toppanel',

    padding: 2,
    heigth: 40,
    bind: {
        data: {
            username: '{userName}'
        }
    },
    layout: {
        type: 'hbox'
    },
    items: [
      {
          xtype: 'panel',
          cls: 'topleftlinks',
          heigth: 40,
          minwidth: 300,
          layout:{
              type: 'hbox',
              pack: 'start'
          },
          items: [
              {
                xtype: 'toppanel.leftnav'
              }
          ]
      },
      {
          
          xtype: 'panel',
          flex: 1,
          cls: 'toprightusername',
          minWidth: 300,
          heigth: 40,
          layout:{
              type: 'hbox',
              pack: 'end'
          },
          items: [
              {
                xtype: 'toppanel.userops'
              },
              {
                  cls: 'toprightlogo',
                  xtype: 'image',
                  autoRender: true,
                  src: 'resources/img/mykmbs-logo.png',
                  height: 40,
                  padding: '0 10 0 0',
                  margin: '0 0 0 0',
                  minWidth: 60,
                  overCls: 'hoveronlogo',
                  listeners: {
                      el: { 
                              click: 'openMain'
                          }
                  } 
              }

          ]

      }
    ]
    
});
