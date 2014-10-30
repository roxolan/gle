Ext.define('Kmbsvle.view.toppanel.leftnav.ToppanelLeftnav', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.toppanel.leftnav',
  
  padding: '0 0 0 0',
  margin: '4 0 0 10',
  height: 32,
  width: 300,
  items: {
    xtype: 'toppanel.leftnav.menu'
  }

});
