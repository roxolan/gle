Ext.define('Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterGrouplistModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.lgroup.board.center.lgrouplist',

    stores: {
        userlist: {
            model: 'Kmbsvle.model.Lgroup',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'lgroup/store.json',
                    read: 'lgroup/findAll.json',
                    update: 'lgroup/store.json',
                    destroy: 'lgroup/remove.json'                    
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});