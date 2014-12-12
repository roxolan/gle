Ext.define('Kmbsvle.view.course.selection.stud.center.dashboard.CourseSelectionStudCenterDashboard', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.course.selection.stud.center.dashboard',
    controller: 'course.selection.stud.center.dashboard',
    viewModel: {
        type: 'course.selection.stud.center.dashboard'
    },
    requires: [
        'Kmbsvle.view.course.selection.stud.center.dashboard.CourseSelectionStudCenterDashboardController',
        'Kmbsvle.view.course.selection.stud.center.dashboard.CourseSelectionStudCenterDashboardModel'
    ],

    bodyPadding: 10,
    title: 'Поточні курси учасника',
    
    html: 'Зведення даних про курс'

});
