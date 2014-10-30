Ext.define('Kmbsvle.view.report.single.right.panel.ReportSingleRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.single.right.panel',
  controller: 'report.single.right.panel',
  viewModel: {
    type: 'report.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.report.single.right.panel.ReportSingleRightPanelController',
    'Kmbsvle.view.report.single.right.panel.ReportSingleRightPanelModel'
  ],
  
  header: false,
  html: 'Налаштування табеля успішності учасника',
  width: 200,
  bodyPadding: 10
  
});
