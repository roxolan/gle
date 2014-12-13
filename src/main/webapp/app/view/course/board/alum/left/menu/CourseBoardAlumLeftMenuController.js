Ext.define('Kmbsvle.view.course.board.alum.left.menu.CourseBoardAlumLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.alum.left.menu',
  
    requires: [
        'Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterList',
        'Kmbsvle.view.course.board.alum.right.profile.CourseBoardAlumRightProfile'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseBoardAlum: function() {
        var me = this;
        me.changeCenterPanel('widget.course.board.alum.center.list');
        me.changeRightPanel('widget.course.board.alum.right.profile', 'dummy', 'collapse');
    }

}); 
