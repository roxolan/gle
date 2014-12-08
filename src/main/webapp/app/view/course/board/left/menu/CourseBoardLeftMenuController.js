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
