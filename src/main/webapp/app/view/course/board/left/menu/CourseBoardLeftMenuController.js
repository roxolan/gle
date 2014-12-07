Ext.define('Kmbsvle.view.course.board.left.menu.CourseBoardLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.left.menu',
  
    requires: [
        'Kmbsvle.view.course.board.center.list.CourseBoardCenterList',
        'Kmbsvle.view.course.board.right.form.CourseBoardRightForm'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.course.board.center.list');
        me.changeRightPanel('widget.course.board.right.form', 'dummy', 'collapse');
    },
    
    addCourse: function() {
        Ext.Msg.alert('addCourse');
    }


}); 
