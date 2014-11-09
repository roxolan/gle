Ext.define('Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.chat.board.right.panel',
    controller: 'chat.board.right.panel',
    viewModel: {
        type: 'chat.board.right.panel'
    },
    requires: [
        'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanelController',
        'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanelModel'        
    ],
    header: false,
    html: 'Settings for Chat Board',
    width: 200,
    bodyPadding: 10
});
