Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.center.list',
    
    initStore: function() {
        this.getStore('courselist').load();
    },
    
    refreshStore: function() {
        var me = this;
        var store = me.getStore('courselist');
        store.load();
    }


}); 
