Ext.define('Kmbsvle.view.message.board.right.panel.MessageBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.message.board.right.panel',
  controller: 'message.board.right.panel',
  viewModel: {
    type: 'message.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.message.board.right.panel.MessageBoardRightPanelController',
    'Kmbsvle.view.message.board.right.panel.MessageBoardRightPanelModel'
  ],
  header: false,
  html: 'Властивості дошки повідомлень',
  width: 200,
  bodyPadding: 10
  
});
