Ext.define('Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanel', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.chat.board.center.panel',

    controller: 'chat.board.center.panel',

    viewModel:
        {
            type: 'chat.board.center.panel'
        },
    requires: [
        'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanelController',
        'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanelModel'
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
        }
    ]
});
