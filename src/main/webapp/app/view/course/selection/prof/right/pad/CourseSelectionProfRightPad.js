Ext.define('Kmbsvle.view.course.selection.prof.right.pad.CourseSelectionProfRightPad', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.prof.right.pad',
    controller: 'course.selection.prof.right.pad',
    viewModel: {
        type: 'course.selection.prof.right.pad'
    },
    requires: [
        'Kmbsvle.view.course.selection.prof.right.pad.CourseSelectionProfRightPadController',
        'Kmbsvle.view.course.selection.prof.right.pad.CourseSelectionProfRightPadModel'    
    ],
    header: false,
    html: 'Particular Course Info Pad, like a brief form',
    width: 200,
    bodyPadding: 10

});
