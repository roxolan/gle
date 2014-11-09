Ext.define('Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.learn.board.left.panel',
  
    requires: [
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel',
        'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanel',
        'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanel',
        
        'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanel',
        'Kmbsvle.view.course.board.center.panel.CourseBoardCenterPanel',
        'Kmbsvle.view.course.board.right.panel.CourseBoardRightPanel'
    ],

    routes: {
        'course/1': 'openCourseSingle',
        'course/board': 'openCourseBoard'
    },

    openCourseSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.course.single.left.panel', 'course_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.course.single.center.panel', 'course_single_center_panel_title');
        me.changeRightPanel('widget.course.single.right.panel', 'course_single_right_panel_title', 'collapse');
        me.redirectTo('course/1');
    },
  
    openCourseBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.course.board.left.panel', 'course_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.course.board.center.panel', 'course_board_center_panel_title');
        me.changeRightPanel('widget.course.board.right.panel', 'course_board_right_panel_title', 'collapse');
        me.redirectTo('course/board');
    }

}); 
