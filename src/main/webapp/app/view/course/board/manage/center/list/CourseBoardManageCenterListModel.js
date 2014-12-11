Ext.define('Kmbsvle.view.course.board.manage.center.list.CourseBoardManageCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.manage.center.list',

    stores: {
        coursemanagelist: {
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
