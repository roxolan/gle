Ext.define('Kmbsvle.view.professor.board.manage.right.form.ProfessorBoardManageRightForm', {
    extend: 'Ext.form.Panel',
  
    alias: 'widget.professor.board.manage.right.form',
    controller: 'professor.board.manage.right.form',
    viewModel: {
        type: 'professor.board.manage.right.form'
    },
    requires: [
        'Kmbsvle.view.professor.board.manage.right.form.ProfessorBoardManageRightFormController',
        'Kmbsvle.view.professor.board.manage.right.form.ProfessorBoardManageRightFormModel'
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
            title: 'Викладач',
            items: [
                {
                    xtype: 'textfield',
                    name: 'courseTitle',
                    reference: 'courseTitle',
                    fieldLabel: 'Ім\'я'
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
                            reference: 'saveBtn',
                            glyph: 'xf061@FontAwesome',
                            text: 'Перейти до повного профілю',
                            listeners: {
                                click: 'gotoProfProfile'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
