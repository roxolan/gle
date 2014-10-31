Ext.define('Kmbsvle.model.Assignment', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idAssignment', type: 'int' },
        { name: 'assignmentTitle', type: 'string' },
        { name: 'idCourse', type: 'int' },
        { name: 'courseTitle', type: 'string', persist:false  },
        { name: 'idLgroup', type: 'int', persist:false  },
        { name: 'lgroupTitle', type: 'string', persist:false  }
    ]
    
});


