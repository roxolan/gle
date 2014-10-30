Ext.define('Kmbsvle.view.manage.board.left.panel.menu.ManageBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.manage.board.left.panel.menu',
  requires: [
    'Kmbsvle.view.manage.board.left.panel.menu.ManageBoardLeftPanelMenuController'
  ],
  controller: 'manage.board.left.panel.menu',
  viewModel: {
    type: 'manage.board.left.panel.menu'
  },

  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'manage_board_group_board',
      text: 'Перелік груп',
      listeners: {
        click: 'openGroupBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'manage_board_course_board',
      text: 'Перелік курсів',
      listeners: {
        click: 'openCourseBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'manage_board_community_board',
      text: 'Перелік спільнот',
      listeners: {
        click: 'openCommunityBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'manage_board_statistics',
      text: 'Статистика',
      listeners: {
        click: 'onStatisticsClick'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'manage_board_calendar',
      text: 'Календар',
      listeners: {
        click: 'onCalendarClick'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'manage_board_report',
      text: 'Звіти',
      listeners: {
        click: 'onReportClick'
      }
    }

  ]

});
