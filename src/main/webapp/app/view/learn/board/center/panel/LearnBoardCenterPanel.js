Ext.define('Kmbsvle.view.learn.board.center.panel.LearnBoardCenterPanel', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.learn.board.center.panel',
    controller: 'learn.board.center.panel',
    viewModel: {
        type: 'learn.board.center.panel'
    },
    requires: [
        'Kmbsvle.view.learn.board.center.panel.LearnBoardCenterPanelController',
        'Kmbsvle.view.learn.board.center.panel.LearnBoardCenterPanelModel'
    ],

    bodyPadding: 10,
    title: 'Learn Center',
    
    html: 'Main Events will unfold here about Learning of individuals'

});
