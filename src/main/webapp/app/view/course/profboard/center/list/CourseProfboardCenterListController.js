Ext.define('Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.profboard.center.list',
    
    initStore: function() {
        this.getStore('courseproflist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseProfilePanel = Ext.create('widget.course.profboard.right.profile');
        // var courseForm = courseFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(courseProfilePanel);
        rhld.setTitle('Редагування курсу ' + record.data.courseTitle);
        rhld.expand();
        
        // courseForm.loadRecord(record);
        
        // courseProfilePanel.lookupReference('deleteBtn').enable();
    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('courseproflist');
        store.load();
    }


}); 


