Ext.define('Kmbsvle.view.course.single.right.panel.CourseSingleRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.course.single.right.panel',
  controller: 'course.single.right.panel',
  viewModel: {
    type: 'course.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanelController',
    'Kmbsvle.view.course.single.right.panel.CourseSingleRightPanelModel'
  ],
  header: false,
  html: 'Properties Zone for the Course',
  width: 200,
  bodyPadding: 10
  
});
