Ext.define('Kmbsvle.model.Lgroup', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idLgroup', type: 'int', useNull:true },
        { name: 'lgroupTitle', type: 'string'}
    ],
    idProperty: 'idLgroup',
    
    proxy: {
        type: 'ajax',
        idParam: 'idLgroup',
        api:{
            create: 'lgroup/store.json',
            read: 'lgroup/find.json',
            update: 'lgroup/store.json',
            destroy: 'lgroup/remove.json'
        },
        reader: {
            type: 'json',            
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            allowSingle: true,
            encode: true,
            rootProperty: 'data',
            writeAllFields: true
        }
    },
    validators: [
        {type: 'presence',  field: 'lgroupTitle'},
        {type: 'length',  field: 'lgroupTitle',  min: 2}
    ]
    
    
});


