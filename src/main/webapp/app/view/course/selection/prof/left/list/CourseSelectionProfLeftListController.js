Ext.define('Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.selection.prof.left.list',
  
    requires: [
        'Kmbsvle.view.course.single.prof.left.menu.CourseSingleProfLeftMenu',
        'Kmbsvle.view.course.single.prof.center.info.CourseSingleProfCenterInfo',
        'Kmbsvle.view.course.single.prof.right.pad.CourseSingleProfRightPad'
    ],

    routes: {
        'course/1': 'openCourseSingleProf',
        'teach/board': 'openCourseBoardProf'
    },

    openCourseSingleProf: function() {
        var me = this;
        me.changeLeftPanel('widget.course.single.prof.left.menu', 'course_single_prof_left_menu_title', 'expand');
        me.changeCenterPanel('widget.course.single.prof.center.info');
        me.changeRightPanel('widget.course.single.prof.right.pad', 'course_single_prof_right_pad_title', 'collapse');
        me.redirectTo('course/1');
    },
    
    openCourseBoardProf: function() {
        var me = this;
        me.changeLeftPanel('widget.course.board.prof.left.menu', 'course_board_prof_left_menu_title', 'expand');
        me.changeCenterPanel('widget.course.board.prof.center.list', 'course_board_prof_center_list_title');
        me.changeRightPanel('widget.course.board.prof.right.profile', 'course_board_prof_right_profile_title', 'collapse');
        me.redirectTo('teach/board');    
    }

}); 
