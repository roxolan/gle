Ext.define('Kmbsvle.view.course.board.manage.right.form.CourseBoardManageRightForm', {
    extend: 'Ext.form.Panel',
  
    alias: 'widget.course.board.manage.right.form',
    controller: 'course.board.manage.right.form',
    viewModel: {
        type: 'course.board.manage.right.form'
    },
    requires: [
        'Kmbsvle.view.course.board.manage.right.form.CourseBoardManageRightFormController',
        'Kmbsvle.view.course.board.manage.right.form.CourseBoardManageRightFormModel'
    ],
    
    layout: {
        type: 'anchor'
    },
    bodyPadding: 10,
    border: false,
    autoScroll: true,
    items: [
        {
            xtype: 'fieldset',
            padding: 10,
            width: 400,
            fieldDefaults: {
                anchor: '100%'
            },
            title: 'Курс',
            items: [
                {
                    xtype: 'textfield',
                    name: 'courseTitle',
                    reference: 'courseTitle',
                    fieldLabel: 'Назва курсу'
                },
                {
                    xtype: 'textfield',
                    name: 'lgroupTitle',
                    fieldLabel: 'Група'
                },               
                {
                    xtype: 'toolbar',
                    ui: 'footer',
                    layout: {
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            reference: 'deleteBtn',
                            glyph: 'xf00d@FontAwesome',
                            text: 'Видалити',
                            listeners: {
                                click: 'deleteCourse'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'saveBtn',
                            glyph: 'xf0c7@FontAwesome',
                            text: 'Зберегти',
                            listeners: {
                                click: 'saveCourse'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
