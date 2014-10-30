Ext.define('Kmbsvle.view.learn.board.left.panel.menu.LearnBoardLeftPanelMenu', {
    extend: 'Ext.menu.Menu',

    alias: 'widget.learn.board.left.panel.menu',

    controller: 'learn.board.left.panel.menu',
    viewModel: {
        type: 'learn.board.left.panel.menu'
    },
    requires: [
        'Kmbsvle.view.learn.board.left.panel.menu.LearnBoardLeftPanelMenuController'
    ],    

    width: 250,
    floating: false,
    items: [
        { 
            xtype: 'menuitem',
            reference: 'learn_board_course_01',
            text: 'Курс №1',
            listeners: {
                click: 'openCourseSingle'
            }
        },
        { 
            xtype: 'menuseparator' 
        },
        { 
            xtype: 'menuitem',
            reference: 'learn_board_course_02',
            text: 'Курс №2',
            listeners: {
                click: 'openCourseSingle'
            }
        },
        { 
            xtype: 'menuseparator' 
        },
        { 
            xtype: 'menuitem',
            reference: 'learn_board_course_03',
            text: 'Курс №3',
            listeners: {
                click: 'openCourseSingle'
            }
        },
        { 
            xtype: 'menuseparator' 
        },
        { 
            xtype: 'menuitem',
            reference: 'learn_board_course_board',
            text: 'Мої курси',
            listeners: {
                click: 'openCourseBoard'
            }
        }
    ]
});
