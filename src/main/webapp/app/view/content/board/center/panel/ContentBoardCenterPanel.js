Ext.define('Kmbsvle.view.content.board.center.panel.ContentBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.content.board.center.panel',
  
  controller: 'content.board.center.panel',
  viewModel: {
    type: 'content.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.content.board.center.panel.ContentBoardCenterPanelController',
    'Kmbsvle.view.content.board.center.panel.ContentBoardCenterPanelModel'
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
