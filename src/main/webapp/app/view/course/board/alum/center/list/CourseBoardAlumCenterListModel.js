Ext.define('Kmbsvle.view.course.board.alum.center.list.CourseBoardAlumCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.alum.center.list',

    stores: {
        coursestudlist: {
            model: 'Kmbsvle.model.Course',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'course/findAll.json'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }

});


