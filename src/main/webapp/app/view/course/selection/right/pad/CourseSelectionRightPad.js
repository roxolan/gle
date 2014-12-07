Ext.define('Kmbsvle.view.course.selection.right.pad.CourseSelectionRightPad', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.right.pad',
    controller: 'course.selection.right.pad',
    viewModel: {
        type: 'course.selection.right.pad'
    },
    requires: [
        'Kmbsvle.view.course.selection.right.pad.CourseSelectionRightPadController',
        'Kmbsvle.view.course.selection.right.pad.CourseSelectionRightPadModel'    
    ],
    header: false,
    html: 'Particular Course Info Pad, like a brief form',
    width: 200,
    bodyPadding: 10

});
