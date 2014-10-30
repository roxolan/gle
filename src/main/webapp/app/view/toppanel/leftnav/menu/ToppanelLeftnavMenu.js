Ext.define('Kmbsvle.view.toppanel.leftnav.menu.ToppanelLeftnavMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.toppanel.leftnav.menu',
  
  controller: 'toppanel.leftnav.menu',
  viewModel: {
    type: 'toppanel.leftnav.menu'
  },
  
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

});
