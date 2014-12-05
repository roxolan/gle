Ext.define('Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupform', {
    extend: 'Ext.form.Panel',
  
    alias: 'widget.lgroup.board.right.lgroupform',
    requires: [
        'Ext.form.FieldSet', 
        'Ext.form.field.Radio',        
        'Ext.form.RadioGroup', 
        'Ext.toolbar.Toolbar',
        
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupformController',
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupformModel'
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
                    name: 'lgroupTitle',
                    reference: 'lgroupTitleField',
                    fieldLabel: 'Назва групи'
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
                                click: 'deleteLgroup'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'addCourseBtn',
                            glyph: 'xf00d@FontAwesome',
                            text: 'Додати курс',
                            listeners: {
                                click: 'addCourse'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'saveBtn',
                            glyph: 'xf0c7@FontAwesome',
                            text: 'Зберегти',
                            listeners: {
                                click: 'saveLgroup'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    
    header: false,
    
    listeners: {
        viewready: 'initStore'
    }
  
});
