Ext.define('Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.manage.board.left.panel',
  
    requires: [
        'Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenu',
        'Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplist',
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupform',

        'Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenu',
        'Kmbsvle.view.course.board.center.list.CourseBoardCenterList',
        'Kmbsvle.view.course.board.right.form.CourseBoardRightForm',
        
        'Kmbsvle.view.community.board.left.menu.CommunityBoardLeftMenu',
        'Kmbsvle.view.community.board.center.list.CommunityBoardCenterList',
        'Kmbsvle.view.community.board.right.form.CommunityBoardRightForm',
        
        'Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanel',
        'Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanel',
        'Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanel',
        
        'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanel',
        'Kmbsvle.view.report.board.center.panel.ReportBoardCenterPanel',
        'Kmbsvle.view.report.board.right.panel.ReportBoardRightPanel'
    ],
    routes: {
        'lgroup/board': 'openLgroupBoard',
        'course/board': 'openCourseBoard',
        'community/board': 'openCommunityBoard',
        'calendar': 'openCalendarBoard',
        'reports': 'openReportBoard'
    },

    openLgroupBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.lgroup.board.left.menu', 'lgroup_board_left_menu_title', 'expand');
        me.changeCenterPanel('widget.lgroup.board.center.lgrouplist');
        me.changeRightPanel('widget.lgroup.board.right.lgroupform', 'dummy', 'collapse');
        me.redirectTo('lgroup/board');
    },

    openCourseBoard: function() {
        var me = this;        
        me.changeLeftPanel('widget.course.board.left.menu', 'course_board_left_menu_title');
        me.changeCenterPanel('widget.course.board.center.list');
        me.changeRightPanel('widget.course.board.right.form', 'course_board_right_form_title');
        me.redirectTo('course/board');
    },

    openCommunityBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.community.board.left.menu', 'community_board_left_menu_title');
        me.changeCenterPanel('widget.community.board.center.list');
        me.changeRightPanel('widget.community.board.right.form', 'community_board_right_form_title');
        me.redirectTo('community/board');
    },

    onStatisticsClick: function() {
        var menuitem = this.lookupReference('menuitem_statistics');
        console.log(menuitem);
        Ext.Msg.alert('clicked!', 'statistics');
    },

    openCalendarBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.calendar.board.left.panel', 'calendar_board_left_panel_title');
        me.changeCenterPanel('widget.calendar.board.center.panel');
        me.changeRightPanel('widget.calendar.board.right.panel', 'calendar_board_right_panel_title');
        me.redirectTo('calendar');
    },

    openReportBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.report.board.left.panel', 'report_board_left_panel_title');
        me.changeCenterPanel('widget.report.board.center.panel');
        me.changeRightPanel('widget.report.board.right.panel', 'report_board_right_panel_title');
        me.redirectTo('reports');
    }

}); 
