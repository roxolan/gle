Ext.define('Kmbsvle.view.report.board.left.panel.menu.ReportBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.report.board.left.panel.menu',

  requires: [
// VESTIGIUM --> create menu as a placeholder for particular reports

    'Kmbsvle.view.report.single.left.panel.ReportSingleLeftPanel',
    'Kmbsvle.view.report.single.center.panel.ReportSingleCenterPanel',
    'Kmbsvle.view.report.single.right.panel.ReportSingleRightPanel'
  ],

  routes: {
    'report/1' : 'openReportSingle'
  },


  openReportSingle: function() {
    this.changeLeftPanel('widget.report.single.left.panel', 'report_single_left_panel_title', 'expand');
    this.changeCenterPanel('widget.report.single.center.panel', 'report_single_center_panel_title');
    this.changeRightPanel('widget.report.single.right.panel', 'report_single_right_panel_title', 'collapse');
    this.redirectTo('report/1');
  }

}); 
