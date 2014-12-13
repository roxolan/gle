Ext.define('Kmbsvle.view.course.board.stud.center.list.CourseBoardStudCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.stud.center.list',

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


