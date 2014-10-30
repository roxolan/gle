Ext.define('Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.calendar.board.left.panel',
    controller: 'calendar.board.left.panel',
    viewModel: {
        type: 'calendar.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanelController',
        'Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanelModel'      
    ],
    
    header: false,
    html: '<h2>Calendar Left Menu</h2>',
    bodyPadding: 10,
    width: 250

});
