Ext.define('Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.prof.center.list',
    
    initStore: function() {
        this.getStore('courseproflist').load();
    },
    
    selectCourse: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var courseProfilePanel = Ext.create('widget.course.board.prof.right.profile');
        // var courseForm = courseFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(courseProfilePanel);
        rhld.setTitle('Курс ' + record.data.courseTitle + ' групи ' + record.data.lgroupTitle);
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


