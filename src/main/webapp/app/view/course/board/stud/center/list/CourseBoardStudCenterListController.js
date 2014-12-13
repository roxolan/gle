Ext.define('Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.stud.center.list',
    
    initStore: function() {
        this.getStore('coursestudlist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseProfilePanel = Ext.create('widget.course.board.stud.right.profile');
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
        var store = me.getStore('coursestudlist');
        store.load();
    }


}); 


