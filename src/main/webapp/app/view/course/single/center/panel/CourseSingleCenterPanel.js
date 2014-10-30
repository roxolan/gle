Ext.define('Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.course.single.center.panel',
  controller: 'course.single.center.panel',
  viewModel: {
    type: 'course.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanelController',
    'Kmbsvle.view.course.single.center.panel.CourseSingleCenterPanelModel'    
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
