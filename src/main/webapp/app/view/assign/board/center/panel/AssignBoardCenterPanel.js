Ext.define('Kmbsvle.view.assign.board.center.panel.AssignBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.assign.board.center.panel',
  
  controller: 'assign.board.center.panel',
  viewModel: {
    type: 'assign.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.assign.board.center.panel.AssignBoardCenterPanelController',
    'Kmbsvle.view.assign.board.center.panel.AssignBoardCenterPanelModel'
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
