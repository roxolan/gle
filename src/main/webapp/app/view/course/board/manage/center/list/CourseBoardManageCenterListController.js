Ext.define('Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.manage.center.list',
    
    initStore: function() {
        var me = this;
        me.getStore('coursemanagelist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseFormPanel = Ext.create('widget.course.board.manage.right.form');
        var courseForm = courseFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(courseFormPanel);
        rhld.setTitle('Редагування курсу ' + record.data.courseTitle);
        rhld.expand();
        
        courseForm.loadRecord(record);
        
        courseFormPanel.lookupReference('deleteBtn').enable();
    },
    
    refreshStore: function() {
        var me = this;
        me.getStore('coursemanagelist').load();
    }


}); 
