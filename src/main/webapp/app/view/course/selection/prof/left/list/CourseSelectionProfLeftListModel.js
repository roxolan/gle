Ext.define('Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.course.selection.prof.left.list',

    data: {

        en: {
            course_selection_prof_left_list_title: 'Current courses'
        },

        uk: {
            course_selection_prof_left_list_title: 'Поточні курси'
        }

    },

    /*
    * It did not work this way because for a tree the store should be a data.TreeStore, and not just data.Store
    * */
    stores: {
        courseselectionprofmenulist: {
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
