Ext.define('Kmbsvle.view.event.board.left.panel.EventBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.event.board.left.panel',
  controller: 'event.board.left.panel',
  viewModel: {
    type: 'event.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.event.board.left.panel.EventBoardLeftPanelController',
    'Kmbsvle.view.event.board.left.panel.EventBoardLeftPanelModel'  
  ],
  header: false,
  html: '<h2>Event Board</h2>',
  bodyPadding: 10,
  width: 250

});
