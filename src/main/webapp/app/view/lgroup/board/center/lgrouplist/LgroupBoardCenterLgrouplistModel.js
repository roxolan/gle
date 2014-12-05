Ext.define('Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplistModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.lgroup.board.center.lgrouplist',

    stores: {
        lgrouplist: {
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