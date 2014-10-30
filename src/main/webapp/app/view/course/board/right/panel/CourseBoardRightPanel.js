Ext.define('Kmbsvle.view.course.board.right.panel.CourseBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.course.board.right.panel',
  controller: 'course.board.right.panel',
  viewModel: {
    type: 'course.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.course.board.right.panel.CourseBoardRightPanelController',
    'Kmbsvle.view.course.board.right.panel.CourseBoardRightPanelModel'
  ],
  header: false,
  html: 'Налаштування курсів',
  width: 200,
  bodyPadding: 10
  
});
