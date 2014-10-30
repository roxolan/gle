Ext.define('Kmbsvle.view.toppanel.userops.menu.ToppanelUseropsMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.toppanel.userops.menu',
  
  controller: 'toppanel.userops.menu',
  viewModel: {
    type: 'toppanel.userops.menu'
  },
  
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

});
