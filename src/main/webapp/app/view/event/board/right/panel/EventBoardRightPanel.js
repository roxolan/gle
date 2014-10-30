Ext.define('Kmbsvle.view.event.board.right.panel.EventBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.event.board.right.panel',
  controller: 'event.board.right.panel',
  viewModel: {
    type: 'event.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.event.board.right.panel.EventBoardRightPanelController',
    'Kmbsvle.view.event.board.right.panel.EventBoardRightPanelModel'
  ],
  header: false,
  html: 'Settings for Event Board',
  width: 200,
  bodyPadding: 10
  
});
