Ext.define('Kmbsvle.view.report.single.left.panel.ReportSingleLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.single.left.panel',
  controller: 'report.single.left.panel',
  viewModel: {
    type: 'report.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.report.single.left.panel.ReportSingleLeftPanelController',
    'Kmbsvle.view.report.single.left.panel.ReportSingleLeftPanelModel'
  ],
  header: false,
  html: 'Звіт про успішність учасника',
  width: 150,
  bodyPadding: 10
});
