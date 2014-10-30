Ext.define('Kmbsvle.view.learn.board.right.panel.LearnBoardRightPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.learn.board.right.panel',
    controller: 'learn.board.right.panel',
    viewModel: {
        type: 'learn.board.right.panel'
    },
    requires: [
        'Kmbsvle.view.learn.board.right.panel.LearnBoardRightPanelController',
        'Kmbsvle.view.learn.board.right.panel.LearnBoardRightPanelModel'    
    ],
    itemId: 'learnRight',
    header: false,
    html: 'Settings for Learning Workplace',
    width: 200,
    bodyPadding: 10

});
