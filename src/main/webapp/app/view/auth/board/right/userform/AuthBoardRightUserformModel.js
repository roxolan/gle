Ext.define('Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserformModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.auth.board.right.userform',

    stores: {
        userstore: {
            source: 'viewmodel.auth.board.center.userlist'
//            model: 'Kmbsvle.model.User',
//            
//            // autoLoad: true
//            autoSync: true,
//            proxy: {
//                type: 'ajax',
//                url: 'user/find.json',
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
