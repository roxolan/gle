Ext.define('Kmbsvle.view.course.single.stud.right.pad.CourseSingleStudRightPad', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.single.stud.right.pad',
    controller: 'course.single.stud.right.pad',
    viewModel: {
        type: 'course.single.stud.right.pad'
    },
    requires: [
        'Kmbsvle.view.course.single.stud.right.pad.CourseSingleStudRightPadController',
        'Kmbsvle.view.course.single.stud.right.pad.CourseSingleStudRightPadModel'
    ],
    header: false,
    html: 'Properties Zone for the Course',
    width: 200,
    bodyPadding: 10
  
});
