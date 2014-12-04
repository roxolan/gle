Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupform', {
    extend: 'Ext.form.Panel',
  
    alias: 'widget.lgroup.board.right.lgroupform',
    requires: [
        'Ext.form.FieldSet', 
        'Ext.form.field.Radio',        
        'Ext.form.RadioGroup', 
        'Ext.toolbar.Toolbar',
        
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightUserformController',
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightUserformModel'
    ],
    controller: 'lgroup.board.right.lgroupform',
    viewModel: {
        type: 'lgroup.board.right.lgroupform'
    },
    
//    bind: {
//        store: '{lgroupstore}'
//    },
    
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
            title: 'Навчальна група',
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    reference: 'usernameField',
                    fieldLabel: 'ID користувача'
                },
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'Ім\'я'
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Прізвище'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'email'
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Пароль',
                    inputType: 'password'                    
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Навчається',
                    items: [
                        {
                            boxLabel: 'Так',
                            name: 'learnerRole',
                            inputValue: 'Y'
                        },
                        {
                            boxLabel: 'Ні',
                            name: 'learnerRole',
                            inputValue: 'N'
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Викладач',
                    items: [
                        {
                            boxLabel: 'Так',
                            name: 'professorRole',
                            inputValue: 'Y'
                        },
                        {
                            boxLabel: 'Ні',
                            name: 'professorRole',
                            inputValue: 'N'
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Менеджер',
                    items: [
                        {
                            boxLabel: 'Так',
                            name: 'managerRole',
                            inputValue: 'Y'
                        },
                        {
                            boxLabel: 'Ні',
                            name: 'managerRole',
                            inputValue: 'N'
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Адміністратор',
                    items: [
                        {
                            boxLabel: 'Так',
                            name: 'adminRole',
                            inputValue: 'Y'
                        },
                        {
                            boxLabel: 'Ні',
                            name: 'adminRole',
                            inputValue: 'N'
                        }
                    ]
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
                                click: 'deleteUser'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'saveBtn',
                            glyph: 'xf0c7@FontAwesome',
                            text: 'Зберегти',
                            listeners: {
                                click: 'saveUser'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    
    header: false,
    
    listeners: {
        // viewready: 'initStore'
    }
  
});
