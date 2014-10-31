Ext.define('Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.calendar.board.center.panel',
    controller: 'calendar.board.center.panel',
    viewModel: {
        type: 'calendar.board.center.panel'
    },
        requires: [
            'Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanelController', 
            'Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanelModel'
        ],

    bodyPadding: 10,
    title: 'Calendar Center',
  
    html: 'Main Events will unfold here about the Календарі',
    minWidth: 800,
    minHeight: 300

});
