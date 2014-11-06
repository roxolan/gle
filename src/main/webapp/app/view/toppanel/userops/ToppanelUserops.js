Ext.define('Kmbsvle.view.toppanel.userops.ToppanelUserops', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.toppanel.userops',
  requires: [
      'Kmbsvle.view.toppanel.userops.ToppanelUseropsController',
      'Kmbsvle.view.toppanel.userops.ToppanelUseropsModel',
      'Kmbsvle.view.toppanel.userops.menu.ToppanelUseropsMenu'
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
    xtype: 'toppanel.userops.menu'
  }

  

});
