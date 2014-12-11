Ext.define('Kmbsvle.view.course.selection.prof.center.dashboard.CourseSelectionProfCenterDashboard', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.course.selection.prof.center.dashboard',
    controller: 'course.selection.prof.center.dashboard',
    viewModel: {
        type: 'course.selection.prof.center.dashboard'
    },
    requires: [
        'Kmbsvle.view.course.selection.prof.center.dashboard.CourseSelectionProfCenterDashboardController',
        'Kmbsvle.view.course.selection.prof.center.dashboard.CourseSelectionProfCenterDashboardModel'
    ],

    bodyPadding: 10,
    title: 'Learn Center',
    
    html: 'Main Events will unfold here about Learning of individuals'

});
