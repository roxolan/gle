Ext.define('Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.manage.board.left.panel',
  controller: 'manage.board.left.panel',
  viewModel: {
    type: 'manage.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanelController',
    'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanelModel',
    'Kmbsvle.view.manage.board.left.panel.menu.ManageBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'manage.board.left.panel.menu'
    }
  ]
  
});
