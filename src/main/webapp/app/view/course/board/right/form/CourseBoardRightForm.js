Ext.define('Kmbsvle.view.course.board.right.form.CourseBoardRightForm', {
    extend: 'Ext.form.Panel',
  
    alias: 'widget.course.board.right.form',
    controller: 'course.board.right.form',
    viewModel: {
        type: 'course.board.right.form'
    },
    requires: [
        'Kmbsvle.view.course.board.right.form.CourseBoardRightFormController',
        'Kmbsvle.view.course.board.right.form.CourseBoardRightFormModel'
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
