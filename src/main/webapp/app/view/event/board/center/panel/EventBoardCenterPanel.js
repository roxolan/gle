Ext.define('Kmbsvle.view.event.board.center.panel.EventBoardCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.event.board.center.panel',
  controller: 'event.board.center.panel',
  viewModel: {
    type: 'event.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.event.board.center.panel.EventBoardCenterPanelController',
    'Kmbsvle.view.event.board.center.panel.EventBoardCenterPanelModel'
  ],
  bodyPadding: 10,
  title: 'Events',
  
  html: 'Event Board, e.g. for a group'

});
