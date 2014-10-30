Ext.define('Kmbsvle.view.report.board.right.panel.ReportBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.board.right.panel',
  controller: 'report.board.right.panel',
  viewModel: {
    type: 'report.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.report.board.right.panel.ReportBoardRightPanelController',
    'Kmbsvle.view.report.board.right.panel.ReportBoardRightPanelModel'
  ],
  header: false,
  html: 'Properties Zone for the Report Board',
  width: 200,
  bodyPadding: 10
  
});
