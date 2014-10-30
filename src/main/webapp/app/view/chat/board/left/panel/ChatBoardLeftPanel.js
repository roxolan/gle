Ext.define('Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.chat.board.left.panel',
  controller: 'chat.board.left.panel',
  viewModel: {
    type: 'chat.board.left.panel'
  },
  header: false,
  html: 'Left Properties Zone for Chat Board',
  width: 150,
  bodyPadding: 10
});
