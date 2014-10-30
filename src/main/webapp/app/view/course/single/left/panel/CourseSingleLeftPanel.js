Ext.define('Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanel', {
  extend: 'Ext.panel.Panel',
    
  alias: 'widget.course.single.left.panel',
  controller: 'course.single.left.panel',
  viewModel: {
    type: 'course.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanelController',
    'Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanelModel',
    'Kmbsvle.view.course.single.left.panel.menu.CourseSingleLeftPanelMenu'    
  ],
  header: false,
  width: 250,
  items: [
      {
        xtype: 'course.single.left.panel.menu'
      }
  ]
});
