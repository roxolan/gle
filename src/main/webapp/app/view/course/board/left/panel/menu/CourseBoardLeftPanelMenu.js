Ext.define('Kmbsvle.view.course.board.left.panel.menu.CourseBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.course.board.left.panel.menu',
  
  controller: 'course.board.left.panel.menu',
  viewModel: {
    type: 'course.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.course.board.left.panel.menu.CourseBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'course_board_course_1',
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
      reference: 'course_board_course_2',
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
      reference: 'course_board_course_3',
      text: 'Курс №3',
      listeners: {
        click: 'openCourseSingle'
      }
    }

  ]

});
