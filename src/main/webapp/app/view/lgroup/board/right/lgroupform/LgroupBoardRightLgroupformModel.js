/*
    ==С08
    Перелік груп
    - таблиця з піктограмами (аватарами груп)
    - інформація про групи (назва, кількість учасників)
    - можливість долучення / ... на групу
 
 */


Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupformModel', {
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
