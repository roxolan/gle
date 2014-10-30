Ext.define('Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.calendar.board.right.panel',
    controller: 'calendar.board.right.panel',
    viewModel: {
        type: 'calendar.board.right.panel'
    },
    requires: [
        'Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanelController',
        'Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanelModel'       
    ],
    
    header: false,
    html: 'Settings for Calendars',
    width: 200,
    bodyPadding: 10

});
