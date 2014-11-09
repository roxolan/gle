Ext.define('Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.learn.board.left.panel',
    controller: 'learn.board.left.panel',
    viewModel: {
        type: 'learn.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanelController',
        'Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanelModel'
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
                    listeners: {
                        click: 'openCourseSingle'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    text: 'Мої курси',
                    listeners: {
                        click: 'openCourseBoard'
                    }
                }
            ]
        }
    ]

});
