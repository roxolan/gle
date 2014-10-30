Ext.define('Kmbsvle.view.auth.board.center.panel.AuthBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.auth.board.center.panel',
  requires: [
    'Kmbsvle.view.auth.board.center.panel.AuthBoardCenterPanelController',
    'Kmbsvle.view.auth.board.center.panel.AuthBoardCenterPanelModel'
  ],
  controller: 'auth.board.center.panel',
  viewModel: {
    type: 'auth.board.center.panel'
  },

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
