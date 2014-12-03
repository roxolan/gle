Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightUserformModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.lgroup.board.right.lgroupform',

    stores: {
        userstore: {
            source: 'viewmodel.lgroup.board.center.lgrouplist'
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
