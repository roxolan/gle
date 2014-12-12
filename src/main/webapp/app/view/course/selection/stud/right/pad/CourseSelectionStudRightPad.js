Ext.define('Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPad', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.stud.right.pad',
    controller: 'course.selection.stud.right.pad',
    viewModel: {
        type: 'course.selection.stud.right.pad'
    },
    requires: [
        'Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPadController',
        'Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPadModel'    
    ],
    header: false,
    html: 'Particular Course Info Pad, like a brief form',
    width: 200,
    bodyPadding: 10

});
