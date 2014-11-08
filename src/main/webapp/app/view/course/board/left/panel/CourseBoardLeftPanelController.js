Ext.define('Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.left.panel',
  
    requires: [
        'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel',
        'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanel',
        'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanel'
    ],

    routes: {
        'course': 'openCourseSingle'
    },


    openCourseSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.course.single.left.panel', 'course_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.course.single.center.panel', 'course_single_center_panel_title');
        me.changeRightPanel('widget.course.single.right.panel', 'course_single_right_panel_title', 'collapse');
        me.redirectTo('course');
    }

}); 
