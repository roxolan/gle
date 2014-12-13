Ext.define('Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.professor.board.manage.center.list',
    
    initStore: function() {
        var me = this;
        me.getStore('professormanagelist').load();
    },
    
    selectProfessor: function(grid, record){
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var professorFormPanel = Ext.create('widget.professor.board.manage.right.form');
        var professorForm = professorFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(professorFormPanel);
        rhld.setTitle('Редагування профіля викладача ' + record.data.fullName);
        rhld.expand();
        
        professorForm.loadRecord(record);
    },
    
    refreshStore: function() {
        var me = this;
        me.getStore('professormanagelist').load();
    }


}); 
