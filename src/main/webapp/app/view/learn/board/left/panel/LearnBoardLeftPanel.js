Ext.define('Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.learn.board.left.panel',
    controller: 'learn.board.left.panel',
    viewModel: {
        type: 'learn.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanelController',
        'Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanelModel',
        'Kmbsvle.view.learn.board.left.panel.menu.LearnBoardLeftPanelMenu'        
    ],  
  
    header: false,
    width: 250,
    items: [
        {
            xtype: 'learn.board.left.panel.menu'
        }
    ]

});
