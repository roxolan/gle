Ext.define('Kmbsvle.view.dashboard.left.panel.menu.DashboardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.dashboard.left.panel.menu',

  requires: [
    'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanel',
    'Kmbsvle.view.manage.board.center.panel.ManageBoardCenterPanel',
    'Kmbsvle.view.manage.board.right.panel.ManageBoardRightPanel',

    'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanel',
    'Kmbsvle.view.admin.board.center.panel.AdminBoardCenterPanel',
    'Kmbsvle.view.admin.board.right.panel.AdminBoardRightPanel',

    'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanel',
    'Kmbsvle.view.report.board.center.panel.ReportBoardCenterPanel',
    'Kmbsvle.view.report.board.right.panel.ReportBoardRightPanel',

    'Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanel',
    'Kmbsvle.view.message.board.center.panel.MessageBoardCenterPanel',
    'Kmbsvle.view.message.board.right.panel.MessageBoardRightPanel'
  ],

  routes: {
    'admin' : 'openAdminBoard',
    'manage' : 'openManageBoard',
    'reports' : 'openReportBoard',
    'messages' : 'openMessageBoard'
  },

  openManageBoard: function() {
    this.changeLeftPanel('widget.manage.board.left.panel', 'manage_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.manage.board.center.panel', 'manage_board_center_panel_title');
    this.changeRightPanel('widget.manage.board.right.panel', 'manage_board_right_panel_title', 'collapse');
    this.redirectTo('manage');
  },

  openAdminBoard: function() {
    this.changeLeftPanel('widget.admin.board.left.panel', 'admin_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.admin.board.center.panel', 'admin_board_center_panel_title');
    this.changeRightPanel('widget.admin.board.right.panel', 'admin_board_right_panel_title', 'collapse');
    this.redirectTo('admin');
  },

  openReportBoard: function() {
    this.changeLeftPanel('widget.report.board.left.panel', 'report_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.report.board.center.panel', 'report_board_center_panel_title');
    this.changeRightPanel('widget.report.board.right.panel', 'report_board_right_panel_title', 'collapse');
    this.redirectTo('reports');
  },

  openMessageBoard: function() {
    this.changeLeftPanel('widget.message.board.left.panel', 'message_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.message.board.center.panel', 'message_board_center_panel_title');
    this.changeRightPanel('widget.message.board.right.panel', 'message_board_right_panel_title', 'collapse');
    this.redirectTo('messages');
  }

}); 
