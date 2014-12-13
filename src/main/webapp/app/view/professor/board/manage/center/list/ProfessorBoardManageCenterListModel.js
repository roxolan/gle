Ext.define('Kmbsvle.view.professor.board.manage.center.list.ProfessorBoardManageCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.professor.board.manage.center.list',

    stores: {
        professormanagelist: {
            model: 'Kmbsvle.model.User',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'user/findAll.json'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }

});
