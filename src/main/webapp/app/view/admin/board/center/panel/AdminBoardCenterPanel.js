Ext.define('Kmbsvle.view.admin.board.center.panel.AdminBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.admin.board.center.panel',
  
  controller: 'admin.board.center.panel',
  viewModel: {
    type: 'admin.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.admin.board.center.panel.AdminBoardCenterPanelController',
    'Kmbsvle.view.admin.board.center.panel.AdminBoardCenterPanelModel'
  ],
  autoScroll: true,
  bodyPadding: 10,
  
  items:[
    {
      title: 'Оновлення',
      html: '<h2>First tab content</h2>'
    },
    {
      title: 'Повідомлення',
      html: '<h3>A bit smaller heading, #3</h3>'
    }]
  
});
