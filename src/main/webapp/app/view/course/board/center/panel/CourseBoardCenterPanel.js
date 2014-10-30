Ext.define('Kmbsvle.view.course.board.center.panel.CourseBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.course.board.center.panel',
  
  controller: 'course.board.center.panel',
  viewModel: {
    type: 'course.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.course.board.center.panel.CourseBoardCenterPanelController',
    'Kmbsvle.view.course.board.center.panel.CourseBoardCenterPanelModel'
  ],

  autoScroll: true,
  bodyPadding: 10,
  
  items:[
    {
      title: 'Оновлення',
      html: '<h2>First tab content</h2>'
    },
    {
      title: 'Повідомлення',
      html: '<h3>A bit smaller heading, #3</h3>'
    }]
  
});
