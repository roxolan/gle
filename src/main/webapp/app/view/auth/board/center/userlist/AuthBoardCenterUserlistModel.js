Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.auth.board.center.userlist',

    stores: {
        userlist: {
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
