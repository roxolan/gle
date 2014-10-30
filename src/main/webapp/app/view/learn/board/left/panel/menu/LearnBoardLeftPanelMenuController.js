Ext.define('Kmbsvle.view.learn.board.left.panel.menu.LearnBoardLeftPanelMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.learn.board.left.panel.menu',

    requires: [
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel',
        'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanel',
        'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanel'
    ],

    routes: {
        'course/1': 'openCourseSingle'
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
    },

    control: {
        'menuitem': {
        //      click: 'openCourseSingle'
        }
    }

}); 




