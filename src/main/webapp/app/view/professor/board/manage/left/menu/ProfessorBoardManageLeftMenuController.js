Ext.define('Kmbsvle.view.professor.board.manage.left.menu.ProfessorBoardManageLeftMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.professor.board.manage.left.menu',
  
    requires: [
        'Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterList',
        'Kmbsvle.view.professor.board.manage.right.form.ProfessorBoardManageRightForm'
    ],

    routes: {
        'prof/board': 'openProfBoard'
    },

    openProfBoard: function() {
        var me = this;
        me.changeCenterPanel('widget.professor.board.manage.center.list');
        me.changeRightPanel('widget.professor.board.manage.right.form', 'dummy', 'collapse');
        me.redirectTo('prof/board');
    },
    
    addProfessor: function() {
        var me = this;
        var rhld = Ext.getCmp('rightholder');
        var professorFormPanel = Ext.create('widget.professor.board.manage.right.form');
        var professorForm = professorFormPanel.getForm();
        
        rhld.removeAll();
        rhld.add(professorFormPanel);
        rhld.setTitle('Новий викладач');
        rhld.expand();
        
        
        var newProfessor = Ext.create('Kmbsvle.model.User', {
            /* TODO This should be not creating a new user-like entity,  
             but adding (changing role) of current users to professors
             */
        });
        
        professorForm.loadRecord(newProfessor);
        // professorFormPanel.lookupReference('deleteBtn').disable();                
    }


}); 
