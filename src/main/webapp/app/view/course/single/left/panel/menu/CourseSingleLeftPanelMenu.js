Ext.define('Kmbsvle.view.course.single.left.panel.menu.CourseSingleLeftPanelMenu', {
  extend: 'Ext.menu.Menu',

  alias: 'widget.course.single.left.panel.menu',

  controller: 'course.single.left.panel.menu',
  viewModel: {
    type: 'course.single.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.course.single.left.panel.menu.CourseSingleLeftPanelMenuController'    
  ],

  width: 250,
  floating: false,
  items: [
    { 
      xtype: 'menuitem',
      reference: 'course_single_content_board',
      text: 'Матеріали',
      listeners: {
        click: 'openContentBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'course_single_assignment_board',
      text: 'Завдання',
      listeners: {
        click: 'openAssignBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'course_single_chat_board',
      text: 'Чат',
      listeners: {
        click: 'openChatBoard'
      }
     
    }
  ]
});
