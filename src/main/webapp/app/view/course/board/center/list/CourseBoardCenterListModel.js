Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.center.list',

    stores: {
        courselist: {
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
