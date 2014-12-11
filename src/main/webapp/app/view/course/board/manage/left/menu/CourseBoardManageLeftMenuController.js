Ext.define('Kmbsvle.view.course.board.manage.left.menu.CourseBoardManageLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.manage.left.menu',
  
    requires: [
        'Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterList',
        'Kmbsvle.view.course.board.manage.right.form.CourseBoardManageRightForm'
    ],

    routes: {
        // 'course/1': 'openCourseSingle'
    },

    openCourseBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.course.board.manage.center.list');
        me.changeRightPanel('widget.course.board.manage.right.form', 'dummy', 'collapse');
    },
    
    addCourse: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseFormPanel = Ext.create('widget.course.board.manage.right.form');
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
