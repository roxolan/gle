Ext.define('Kmbsvle.view.report.single.center.panel.ReportSingleCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.report.single.center.panel',
  controller: 'report.single.center.panel',
  viewModel: {
    type: 'report.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.report.single.center.panel.ReportSingleCenterPanelController',
    'Kmbsvle.view.report.single.center.panel.ReportSingleCenterPanelModel'    
  ],
  
  html: 'Табель успішності учасника',
  bodyPadding: 10

});
