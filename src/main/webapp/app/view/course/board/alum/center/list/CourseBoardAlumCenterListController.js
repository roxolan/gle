Ext.define('Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.alum.center.list',
    
    initStore: function() {
        this.getStore('coursealumlist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseProfilePanel = Ext.create('widget.course.board.alum.right.profile');
        // var courseForm = courseFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(courseProfilePanel);
        rhld.setTitle('Курс ' + record.data.courseTitle);
        rhld.expand();
        
        // courseForm.loadRecord(record);
        
        // courseProfilePanel.lookupReference('deleteBtn').enable();
    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('coursealumlist');
        store.load();
    }


}); 


