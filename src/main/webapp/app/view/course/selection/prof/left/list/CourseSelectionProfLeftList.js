Ext.define('Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftList', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.prof.left.list',
    controller: 'course.selection.prof.left.list',
    viewModel: {
        type: 'course.selection.prof.left.list'
    },
    requires: [
        'Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListController',
        'Kmbsvle.view.course.selection.prof.left.list.CourseSelectionProfLeftListModel'
    ],  
  
    header: false,
    width: 300,
    items: [
        {
            xtype: 'treepanel',
            // width: 300,
            store: 'CourseSelectionProfLeftMenuListStore'
            // nodeType: 'lgroup',
            // name: 'EMBA24'
            // padding: '0 0 0 0',
            // store: 'courseselectionprofmenulist'
            // rootVisible: false
        },
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    text: 'Управління курсами',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseBoardProf'
                    }
                }
            ]
        }
    ]

});
