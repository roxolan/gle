Ext.define('Kmbsvle.view.course.board.prof.left.menu.CourseBoardProfLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.prof.left.menu',
  
    requires: [
        'Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterList',
        'Kmbsvle.view.course.board.prof.right.profile.CourseBoardProfRightProfile'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseBoardProf: function() {
        var me = this;
        me.changeCenterPanel('widget.course.board.prof.center.list');
        me.changeRightPanel('widget.course.board.prof.right.profile', 'dummy', 'collapse');
    },
    
    createCourse: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseFormPanel = Ext.create('widget.course.board.right.form');
        var courseForm = courseFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(courseFormPanel);
        rhld.setTitle('Новий курс');
        rhld.expand();
        
        
        var newCourse = Ext.create('Kmbsvle.model.Course', {
            courseTitle: 'Новий курс'
        });
        
        courseForm.loadRecord(newCourse);
        courseFormPanel.lookupReference('deleteBtn').disable();                
    }


}); 


