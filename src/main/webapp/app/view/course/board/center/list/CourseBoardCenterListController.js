Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.center.list',
    
    initStore: function() {
        this.getStore('courselist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseFormPanel = Ext.create('widget.course.board.right.form');
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
        var store = me.getStore('courselist');
        store.load();
    }


}); 
