Ext.define('Kmbsvle.model.AssignmentSubmission', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idAssignmentSubmission', type: 'int' },
        { name: 'submissionDate', type: 'date', dateFormat:'Ymd' },
        { name: 'username', type: 'string' },
        { name: 'userFullName', type: 'string', persist:false },
        { name: 'idAssignment', type: 'int' },
        { name: 'assignmentTitle', type: 'string', persist:false },
        { name: 'idCourse', type: 'int', persist:false },
        { name: 'courseTitle', type: 'string', persist:false },
        { name: 'idLgroup', type: 'int', persist:false },
        { name: 'lgrouTitle', type: 'string', persist:false }
    ]
    
});


