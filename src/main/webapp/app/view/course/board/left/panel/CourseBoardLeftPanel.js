Ext.define('Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.left.panel',
    controller: 'course.board.left.panel',
    viewModel: {
        type: 'course.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanelController',
        'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanelModel'
    ],
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    text: 'Курс №1',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Курс №2',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Курс №3',
                    glyph: 'xf0a2@FontAwesome',
                    listeners: {
                        click: 'openCourseSingle'
                    }
                }
            ]
        }
    ]       
});
