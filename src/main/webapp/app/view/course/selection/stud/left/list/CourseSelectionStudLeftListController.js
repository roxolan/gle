Ext.define('Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.selection.stud.left.list',
  
    requires: [
    	// TODO replace when course.single --> course.single.stud is refactored
        'Kmbsvle.view.course.single.stud.left.menu.CourseSingleStudLeftMenu',
        'Kmbsvle.view.course.single.stud.center.info.CourseSingleStudCenterInfo',
        'Kmbsvle.view.course.single.stud.right.pad.CourseSingleStudRightPad'
    ],

    routes: {
        'course/1': 'openCourseSingle'
    },

    openCourseSingleStud: function() {
        var me = this;
        me.changeLeftPanel('widget.course.single.stud.left.menu', 'course_single_stud_left_menu_title', 'expand');
        me.changeCenterPanel('widget.course.single.stud.center.info');
        me.changeRightPanel('widget.course.single.stud.right.pad', 'course_single_stud_right_pad_title', 'collapse');
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
