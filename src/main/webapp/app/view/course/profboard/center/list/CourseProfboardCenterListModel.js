Ext.define('Kmbsvle.view.course.profboard.center.list.CourseProfboardCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.profboard.center.list',

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


