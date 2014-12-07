Ext.define('Kmbsvle.model.Course', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idCourse', type: 'int' },
        { name: 'courseTitle', type: 'string' },
        { name: 'idLgroup', type: 'int' },
        { name: 'lgroupTitle', type: 'string', persist:false }
    ]
    
});


