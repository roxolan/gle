Ext.define('Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.chat.board.left.panel',
    controller: 'chat.board.left.panel',
    viewModel: {
        type: 'chat.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanelController',
        'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanelModel'
    ],
    header: false,
    html: 'Left Properties Zone for Chat Board',
    width: 150,
    bodyPadding: 10
});
