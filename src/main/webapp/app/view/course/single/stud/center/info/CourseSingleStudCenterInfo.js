Ext.define('Kmbsvle.view.course.single.stud.center.info.CourseSingleStudCenterInfo', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.course.single.stud.center.info',
  controller: 'course.single.stud.center.info',
  viewModel: {
    type: 'course.single.stud.center.info'
  },
  requires: [
    'Kmbsvle.view.course.single.stud.center.info.CourseSingleStudCenterInfoController',
    'Kmbsvle.view.course.single.stud.center.info.CourseSingleStudCenterInfoModel'    
  ],
  
  autoScroll: true,
  bodyPadding: 10,
  items:[
    {
      itemId: 'firstTab',
      title: 'Події курсу',
      html: '<h2>Content.</h2>',
      listeners: {
        onConfirm: function(){
          console.log('Listener in the tab clicked');
        }
      }
    },
    {
      itemId: 'secondTab',
      title: 'Матеріали',
      html: '<h3>A smaller heading, #3</h3>'
    }]

});
