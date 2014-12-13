Ext.define('Kmbsvle.view.course.board.stud.left.menu.CourseBoardStudLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.stud.left.menu',
  
    requires: [
        'Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterList',
        'Kmbsvle.view.course.board.stud.right.profile.CourseBoardStudRightProfile'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseBoardStud: function() {
        var me = this;
        me.changeCenterPanel('widget.course.board.stud.center.list');
        me.changeRightPanel('widget.course.board.stud.right.profile', 'dummy', 'collapse');
    }


}); 


