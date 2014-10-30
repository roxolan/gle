Ext.define('Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.board.left.panel',
  controller: 'report.board.left.panel',
  viewModel: {
    type: 'report.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanelController',
    'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanelModel',
    'Kmbsvle.view.report.board.left.panel.menu.ReportBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'report.board.left.panel.menu'
    }
  ]

});
