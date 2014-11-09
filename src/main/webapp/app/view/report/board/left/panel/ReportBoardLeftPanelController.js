Ext.define('Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.report.board.left.panel',
  
    requires: [
        'Kmbsvle.view.report.single.left.panel.ReportSingleLeftPanel',
        'Kmbsvle.view.report.single.center.panel.ReportSingleCenterPanel',
        'Kmbsvle.view.report.single.right.panel.ReportSingleRightPanel'
    ],

    routes: {
        'report/1' : 'openReportSingle'
    },


    openReportSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.report.single.left.panel', 'report_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.report.single.center.panel');
        me.changeRightPanel('widget.report.single.right.panel', 'report_single_right_panel_title', 'collapse');
        me.redirectTo('report/1');
    }

}); 
