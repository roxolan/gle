Ext.define('Kmbsvle.view.lgroup.board.center.panel.LgroupBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.lgroup.board.center.panel',
  
  controller: 'lgroup.board.center.panel',
  viewModel: {
    type: 'lgroup.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.lgroup.board.center.panel.LgroupBoardCenterPanelController',
    'Kmbsvle.view.lgroup.board.center.panel.LgroupBoardCenterPanelModel'
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
