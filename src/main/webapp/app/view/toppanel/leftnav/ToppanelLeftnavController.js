Ext.define('Kmbsvle.view.toppanel.leftnav.ToppanelLeftnavController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.toppanel.leftnav',

    requires: [
        'Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanel',
        'Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanel',
        'Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanel',
    
        'Kmbsvle.view.course.selection.left.list.CourseSelectionLeftList',
        'Kmbsvle.view.course.selection.center.dashboard.CourseSelectionCenterDashboard',
        'Kmbsvle.view.course.selection.right.pad.CourseSelectionRightPad',
    
        'Kmbsvle.view.community.selection.left.list.CommunitySelectionLeftList',
        'Kmbsvle.view.community.selection.center.dashboard.CommunitySelectionCenterDashboard',    
        'Kmbsvle.view.community.selection.right.pad.CommunitySelectionRightPad',
        
        'Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenu',
        'Kmbsvle.view.course.board.center.list.CourseBoardCenterList',
        'Kmbsvle.view.course.board.right.form.CourseBoardRightForm',
        
        'Kmbsvle.view.manage.board.left.panel.ManageBoardLeftPanel',
        'Kmbsvle.view.manage.board.center.panel.ManageBoardCenterPanel',
        'Kmbsvle.view.manage.board.right.panel.ManageBoardRightPanel',
        
        'Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanel',
        'Kmbsvle.view.admin.board.center.panel.AdminBoardCenterPanel',
        'Kmbsvle.view.admin.board.right.panel.AdminBoardRightPanel'
    ],

    routes: {
        'calendar' : 'openCalendarBoard',
        'social' : 'openSocialBoard',
        'courses' : 'openProfessorBoard',
        'manage' : 'openManageBoard',
        'admin' : 'openAdminBoard',
        'course/selection' : 'openCourseSelection',
        'community/selection' : 'openCommunitySelection'
    },

    setLeftnavCaptions: function() {
        // TODO refactor setLeftnavCaptions method
        var me = this;
        var userSelectedLocale = 'uk';

        var learnItem = me.lookupReference('leftnav_learn');
        var socialItem = me.lookupReference('leftnav_social');
        var calendarItem = me.lookupReference('leftnav_calendar');
        var teachingItem = me.lookupReference('leftnav_teaching');
        var manageItem = me.lookupReference('leftnav_manage');
        var adminItem = me.lookupReference('leftnav_admin');

        // console.log(this.getViewModel().getData());

        if (userSelectedLocale === 'en') {
            var learnCaption = me.getViewModel().getData().en.toppanel_leftnav_learn_caption;
            var socialCaption = me.getViewModel().getData().en.toppanel_leftnav_social_caption;
            var calendarCaption = me.getViewModel().getData().en.toppanel_leftnav_calendar_caption;
            var teachingCaption = me.getViewModel().getData().en.toppanel_leftnav_teaching_caption;
            var manageCaption = me.getViewModel().getData().en.toppanel_leftnav_manage_caption;
            var adminCaption = me.getViewModel().getData().en.toppanel_leftnav_admin_caption;
            

        } else if (userSelectedLocale === 'uk') {
            var learnCaption = me.getViewModel().getData().uk.toppanel_leftnav_learn_caption;
            var socialCaption = me.getViewModel().getData().uk.toppanel_leftnav_social_caption;
            var calendarCaption = me.getViewModel().getData().uk.toppanel_leftnav_calendar_caption;
            var teachingCaption = me.getViewModel().getData().uk.toppanel_leftnav_teaching_caption;
            var manageCaption = me.getViewModel().getData().uk.toppanel_leftnav_manage_caption;
            var adminCaption = me.getViewModel().getData().uk.toppanel_leftnav_admin_caption;
        }

        learnItem.setConfig('text', learnCaption);
        socialItem.setConfig('text', socialCaption);
        calendarItem.setConfig('text', calendarCaption);
        teachingItem.setConfig('text', teachingCaption);
        manageItem.setConfig('text', manageCaption);
        adminItem.setConfig('text', adminCaption);
    },

    openCourseSelection: function() {
        var me = this;
        me.changeLeftPanel('widget.course.selection.left.list', 'course_selection_left_list_title', 'expand');
        me.changeCenterPanel('widget.course.selection.center.dashboard');
        me.changeRightPanel('widget.course.selection.right.pad', 'course_selection_right_pad_title', 'collapse');
        me.redirectTo('course/selection');
    },
  
    openCommunitySelection: function() {
        var me = this;
        me.changeLeftPanel('widget.community.selection.left.list', 'community_selection_left_list_title', 'expand');
        me.changeCenterPanel('widget.community.selection.center.dashboard');
        me.changeRightPanel('widget.community.selection.right.pad', 'community_selection_right_pad_title', 'collapse');
        me.redirectTo('community/selection');
    },
   
    openCalendarBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.calendar.board.left.panel', 'calendar_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.calendar.board.center.panel');
        me.changeRightPanel('widget.calendar.board.right.panel', 'calendar_board_right_panel_title', 'collapse');
        me.redirectTo('calendar');
    },
    
    openProfessorBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.course.selection.left.list', 'course_selection_left_list_title', 'expand');
        me.changeCenterPanel('widget.course.selection.center.dashboard');
        me.changeRightPanel('widget.course.board.right.pad', 'course_board_right_pad_title', 'collapse');
        me.redirectTo('course/selection');
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
 
    control: {
        '#': {
            afterrender: 'setLeftnavCaptions'
        }
    }

});


