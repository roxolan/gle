Ext.define('Kmbsvle.view.report.board.center.panel.ReportBoardCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.board.center.panel',
  controller: 'report.board.center.panel',
  viewModel: {
    type: 'report.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.report.board.center.panel.ReportBoardCenterPanelController',
    'Kmbsvle.view.report.board.center.panel.ReportBoardCenterPanelModel'    
  ],
  html: 'Reports -- Звіти',
  bodyPadding: 10
  
});
