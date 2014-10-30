Ext.define('Kmbsvle.view.message.board.center.panel.MessageBoardCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.message.board.center.panel',
  controller: 'message.board.center.panel',
  viewModel: {
    type: 'message.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.message.board.center.panel.MessageBoardCenterPanelController',
    'Kmbsvle.view.message.board.center.panel.MessageBoardCenterPanelModel'    
  ],
  html: 'Messages -- Повідомлення ',
  bodyPadding: 10
});
