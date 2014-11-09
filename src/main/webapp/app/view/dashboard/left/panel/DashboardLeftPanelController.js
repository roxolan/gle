Ext.define('Kmbsvle.view.dashboard.left.panel.DashboardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.dashboard.left.panel',
  
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
        var me = this;
        me.changeLeftPanel('widget.manage.board.left.panel', 'manage_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.manage.board.center.panel');
        me.changeRightPanel('widget.manage.board.right.panel', 'manage_board_right_panel_title', 'collapse');
        me.redirectTo('manage');
    },

    openAdminBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.admin.board.left.panel', 'admin_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.admin.board.center.panel');
        me.changeRightPanel('widget.admin.board.right.panel', 'admin_board_right_panel_title', 'collapse');
        me.redirectTo('admin');
    },

    openReportBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.report.board.left.panel', 'report_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.report.board.center.panel');
        me.changeRightPanel('widget.report.board.right.panel', 'report_board_right_panel_title', 'collapse');
        me.redirectTo('reports');
    },

    openMessageBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.message.board.left.panel', 'message_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.message.board.center.panel');
        me.changeRightPanel('widget.message.board.right.panel', 'message_board_right_panel_title', 'collapse');
        me.redirectTo('messages');
    },

    onPanelShow: function() {
        var lhld = Ext.getCmp('leftholder');
        var userSelectedLocale = 'uk';

        if (userSelectedLocale === 'en') {
            var leftTitle = this.getViewModel().getData().en.dashboard_left_panel_title;
        } else if (userSelectedLocale === 'uk') {
            var leftTitle = this.getViewModel().getData().uk.dashboard_left_panel_title;
        }

        lhld.setConfig('title', leftTitle);
    },


    control: {
        '#': {
            afterrender: 'onPanelShow'
        }
    }
}); 
