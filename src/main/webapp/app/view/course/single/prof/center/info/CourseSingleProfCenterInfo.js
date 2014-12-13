Ext.define('Kmbsvle.view.course.single.prof.center.info.CourseSingleProfCenterInfo', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.course.single.prof.center.info',
  controller: 'course.single.prof.center.info',
  viewModel: {
    type: 'course.single.prof.center.info'
  },
  requires: [
    'Kmbsvle.view.course.single.prof.center.info.CourseSingleProfCenterInfoController',
    'Kmbsvle.view.course.single.prof.center.info.CourseSingleProfCenterInfoModel'    
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
