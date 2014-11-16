Ext.define('Kmbsvle.store.User', {
    extend: 'Ext.data.Store',
    requires: ['Kmbsvle.model.User'],
    model: 'Kmbsvle.model.User',
    proxy: {
        type: 'ajax',
        url: 'user/findAll.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});


