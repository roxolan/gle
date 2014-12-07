Ext.define('Kmbsvle.view.course.selection.center.dashboard.CourseSelectionCenterDashboard', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.course.selection.center.dashboard',
    controller: 'course.selection.center.dashboard',
    viewModel: {
        type: 'course.selection.center.dashboard'
    },
    requires: [
        'Kmbsvle.view.course.selection.center.dashboard.CourseSelectionCenterDashboardController',
        'Kmbsvle.view.course.selection.center.dashboard.CourseSelectionCenterDashboardModel'
    ],

    bodyPadding: 10,
    title: 'Learn Center',
    
    html: 'Main Events will unfold here about Learning of individuals'

});
