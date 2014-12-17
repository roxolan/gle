Ext.define('Kmbsvle.view.course.selection.stud.left.list.CourseSelectionStudLeftListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.selection.stud.left.list',
  
    requires: [
        'Kmbsvle.view.course.single.stud.left.menu.CourseSingleStudLeftMenu',
        'Kmbsvle.view.course.single.stud.center.info.CourseSingleStudCenterInfo',
        'Kmbsvle.view.course.single.stud.right.pad.CourseSingleStudRightPad',
        
        'Kmbsvle.view.course.board.stud.left.menu.CourseBoardStudLeftMenu'
    ],

    routes: {
        'course/1': 'openCourseSingleStud'
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
        me.changeLeftPanel('widget.course.board.stud.left.menu', 'course_board_stud_left_menu_title', 'expand');
        me.changeCenterPanel('widget.course.board.stud.center.list');
        me.changeRightPanel('widget.course.board.stud.right.profile', 'course_board_stud_right_profile_title', 'collapse');
        me.redirectTo('course/board');    
    }

}); 
