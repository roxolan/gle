Ext.define('Kmbsvle.view.auth.board.center.userlist.AuthBoardCenterUserlistModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.auth.board.center.userlist',

    stores: {
        userlist: {
            model: 'Kmbsvle.model.User',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'user/store.json',
                    read: 'user/findAll.json',
                    update: 'user/store.json',
                    destroy: 'user/remove.json'                    
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            autoLoad: true,
            autoSync: true
        },
        users: {
            model: 'Kmbsvle.model.User'
//            proxy: {
//                type: 'ajax',
//                api: {
//                    create: 'user/store.json',
//                    read: 'user/find.json',
//                    update: 'user/store.json',
//                    destroy: 'user/remove.json'                    
//                },
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                },
//                writer: {
//                    type: 'json',
//                    allowSingle: true,
//                    encode: true,
//                    rootProperty: 'data',
//                    writeAllFields: true    
//                }
//            }
        }
    }
});
