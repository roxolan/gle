Ext.define('Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.selection.stud.left.list',
  
    requires: [
    	// TODO replace when course.single --> course.single.stud is refactored
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel',
        'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanel',
        'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanel'
    ],

    routes: {
        'course/1': 'openCourseSingle'
    },

    openCourseSingleStud: function() {
        var me = this;
        me.changeLeftPanel('widget.course.single.left.panel', 'course_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.course.single.center.panel', 'course_single_center_panel_title');
        me.changeRightPanel('widget.course.single.right.panel', 'course_single_right_panel_title', 'collapse');
        me.redirectTo('course/1');
    },
    
    openCourseBoardStud: function() {
        var me = this;
        me.changeLeftPanel('widget.course.board.prof.left.menu', 'course_board_prof_left_menu_title', 'expand');
        me.changeCenterPanel('widget.course.board.prof.center.list', 'course_board_prof_center_list_title');
        me.changeRightPanel('widget.course.board.prof.right.profile', 'course_board_prof_right_profile_title', 'collapse');
        me.redirectTo('course/board');    
    }

}); 
