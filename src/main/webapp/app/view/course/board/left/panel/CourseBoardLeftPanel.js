Ext.define('Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.course.board.left.panel',
  controller: 'course.board.left.panel',
  viewModel: {
    type: 'course.board.left.panel'
  },
  requires: [
    'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanelController',
    'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanelModel',
    'Kmbsvle.view.course.board.left.panel.menu.CourseBoardLeftPanelMenu'
  ],
  header: false,
  width: 250,
  items: [
    {
      xtype: 'course.board.left.panel.menu'
    }
  ]

});
