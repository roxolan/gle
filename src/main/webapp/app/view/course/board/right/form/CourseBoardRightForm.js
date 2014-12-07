Ext.define('Kmbsvle.view.course.board.right.form.CourseBoardRightForm', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.right.form',
    controller: 'course.board.right.form',
    viewModel: {
        type: 'course.board.right.form'
    },
    requires: [
        'Kmbsvle.view.course.board.right.form.CourseBoardRightFormController',
        'Kmbsvle.view.course.board.right.form.CourseBoardRightFormModel'
    ],
    header: false,
    html: 'Форма курсу',
    width: 200,
    bodyPadding: 10
  
});
