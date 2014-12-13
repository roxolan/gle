Ext.define('Kmbsvle.view.course.single.prof.right.pad.CourseSingleProfRightPad', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.course.single.prof.right.pad',
  controller: 'course.single.prof.right.pad',
  viewModel: {
    type: 'course.single.prof.right.pad'
  },
  requires: [
    'Kmbsvle.view.course.single.prof.right.pad.CourseSingleProfRightPadController',
    'Kmbsvle.view.course.single.prof.right.pad.CourseSingleProfRightPadModel'
  ],
  header: false,
  html: 'Перспектива викладача - окремий курс',
  width: 200,
  bodyPadding: 10
  
});
