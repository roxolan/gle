Ext.define('Kmbsvle.view.course.board.prof.center.list.CourseBoardProfCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.prof.center.list',

    stores: {
        courseproflist: {
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


