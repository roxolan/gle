Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.auth.board.center.userlist',

    stores: {
        users: {
            model: 'Kmbsvle.model.User',
            proxy: {
                type: 'ajax',
                url: 'user/findAll.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            
            autoLoad: true,
            autoSync: true
        }
    }
});
