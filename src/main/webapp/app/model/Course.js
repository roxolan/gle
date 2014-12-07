Ext.define('Kmbsvle.model.Course', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length'
    ],
    
    fields: [
        { name: 'idCourse', type: 'int', useNull: true },
        { name: 'courseTitle', type: 'string' },
        { name: 'idLgroup', type: 'int', useNull: true },
        { name: 'lgroupTitle', type: 'string', persist: false }
    ],
    idProperty: 'idCourse',
    
    proxy: {
        type: 'ajax',
        idParam: 'idCourse',
        api: {
            create: 'course/store.json',
            read: 'course/find.json',
            update: 'course/store.json',
            destroy: 'course/remove.json'
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
        {type: 'presence',  field: 'courseTitle'},
        {type: 'length', field: 'courseTitle', min: 2},
        {type: 'presence',  field: 'idLgroup'},
        {type: 'length', field: 'idLgroup', min: 1}       
    ]
    
});


