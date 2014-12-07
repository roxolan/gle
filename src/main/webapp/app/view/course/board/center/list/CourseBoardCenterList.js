Ext.define('Kmbsvle.view.course.board.center.list.CourseBoardCenterList', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.course.board.center.list',
  
  controller: 'course.board.center.list',
  viewModel: {
    type: 'course.board.center.list'
  },
  requires: [
    'Kmbsvle.view.course.board.center.list.CourseBoardCenterListController',
    'Kmbsvle.view.course.board.center.list.CourseBoardCenterListModel'
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
