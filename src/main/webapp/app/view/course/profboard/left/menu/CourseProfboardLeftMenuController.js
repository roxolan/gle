Ext.define('Kmbsvle.view.course.profboard.left.menu.CourseProfboardLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.profboard.left.menu',
  
    requires: [
        'Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterList',
        'Kmbsvle.view.course.profboard.right.profile.CourseProfboardRightProfile'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseProfboard: function() {
        var me = this;
        me.changeCenterPanel('widget.course.profboard.center.list');
        me.changeRightPanel('widget.course.profboard.right.profile', 'dummy', 'collapse');
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


