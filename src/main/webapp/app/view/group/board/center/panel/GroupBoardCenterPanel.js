Ext.define('Kmbsvle.view.group.board.center.panel.GroupBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.group.board.center.panel',
  
  controller: 'group.board.center.panel',
  viewModel: {
    type: 'group.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.group.board.center.panel.GroupBoardCenterPanelController',
    'Kmbsvle.view.group.board.center.panel.GroupBoardCenterPanelModel'
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
