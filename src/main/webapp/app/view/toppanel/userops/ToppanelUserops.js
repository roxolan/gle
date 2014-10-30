Ext.define('Kmbsvle.view.toppanel.userops.ToppanelUserops', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.toppanel.userops',
  
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
    xtype: 'toppanel.userops.menu'
  }

  

});
