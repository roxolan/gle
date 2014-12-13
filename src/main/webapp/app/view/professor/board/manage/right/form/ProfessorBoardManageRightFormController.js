Ext.define('Kmbsvle.view.professor.board.manage.right.form.ProfessorBoardManageRightFormController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.professor.board.manage.right.form',
    
    gotoProfProfile: function(){
        
    },
    
    
    refreshStore: function() {
        var me = this;
        var professorBoardCenterListStore = Ext.getCmp('centerholder').getComponent('professorBoardManageCenterList').getStore('professormanagelist');
        
        professorBoardCenterListStore.load();
    }


}); 
