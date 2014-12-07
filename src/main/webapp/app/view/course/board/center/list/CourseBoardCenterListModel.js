Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.board.center.list',

    stores: {
        courselist: {
            model: 'Kmbsvle.model.Course',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'course/store.json',
                    read: 'course/findAll.json',
                    update: 'course/store.json',
                    destroy: 'course/remove.json'                    
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }

});
