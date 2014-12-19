Ext.define('Kmbsvle.view.apply.form.ApplyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.apply.form',
    controller: 'apply.form',
    modal: true,
    closable: false,
    autoRender: true,
    floating: true,

    requires: [
        'Ext.form.field.Text',
        'Kmbsvle.view.apply.form.ApplyFormController'
    ],
    
    itemId: 'applyForm',

    title: 'Аплікаційна форма',
    frame: true,
    bodyPadding: 5,
    width: 735,
            
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 110,
        msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
    },
            
    items: [
        {
            layout: {
                type: 'hbox',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Контактна інформація',
                    defaultType: 'textfield',
                    width: 605,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'П.І.Б.',
                            layout: 'hbox',
                            combineErrors: true,
                            defaultType: 'textfield',
                            defaults: {
                                hideLabel: 'true'
                            },
                            items: [
                                { 
                                    name: 'firstName', 
                                    fieldLabel: 'Ім\'я', 
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'ім\'я',
                                    reference: 'firstName',
                                    flex: 2                      
                                },
                                { 
                                    name: 'patronymicName', 
                                    fieldLabel: 'По-батькові',
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'по-батькові',
                                    reference: 'patronymicName',
                                    margin: '0 0 0 6',
                                    flex: 2
                                },
                                { 
                                    name: 'lastName', 
                                    fieldLabel: 'Прізвище',
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'прізвище',
                                    reference: 'lastName',
                                    margin: '0 0 0 6',
                                    flex: 3
                                }                               
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Робочий email',
                                    name: 'email',
                                    vtype: 'email',
                                    flex: 1,
                                }, 
                                {
                                    fieldLabel: 'Моб. телефон',
                                    // labelWidth: 100,
                                    name: 'phone',
                                    width: 200,
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Повинен мати форматs   xxx-xxx-xxxx'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Особистий email',
                                    name: 'email',
                                    vtype: 'email',
                                    flex: 1,
                                }, 
                                {
                                    fieldLabel: 'Роб. телефон',
                                    // labelWidth: 100,
                                    name: 'phone',
                                    width: 200,
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Повинен мати формат   xxx-xxx-xxxx'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [ 
                                {
                                    fieldLabel: 'Дом. телефон',
                                    // labelWidth: 100,
                                    name: 'phone',
                                    width: 200,
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Повинен мати формат   xxx-xxx-xxxx'
                                }
                            ]
                        }
                    ]
                },                 
                {
                    xtype: 'image',
                    autoRender: true,
                    src: 'resources/img/upload_photo.png',
                    width: 100,
                    // height: 120,
                    margin: '30 15 5 15',
                    listeners: {
                        el: {
                            click: 'openUploadForm'
                        }    
                    }
                }
            ]
        },
        {
            layout: {
                type: 'hbox',
                pack: 'start'                    
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Персональні дані',
                    width: 720,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                pack: 'start'
                            },
                            combineErrors: true,
                            items: [
                                {
                                    xtype: 'datefield',
                                    labelAlign: 'right',
                                    name: 'birthDate',
                                    fieldLabel: 'Народження',
                                    emptyText: 'дата народження',
                                    width: 300,
                                    labelWidth: 100,
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'birthPlace', 
                                    fieldLabel: 'Місце народження',
                                    hideLabel: 'true',
                                    emptyText: 'місце народження',
                                    reference: 'birthPlace',
                                    margin: '0 0 0 50',
                                    flex: 2                                    
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'start'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'citizenship', 
                                    fieldLabel: 'Громадянство',
                                    emptyText: '',
                                    reference: 'citizenship',
                                    width: 300,
                                    labelWidth: 100,
                                    flex: 1                                    
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'residence', 
                                    fieldLabel: 'Країна проживання',
                                    emptyText: '',
                                    reference: 'residence',
                                    margin: '0 0 0 50',
                                    flex: 1                                    
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    buttons: [
        { 
            text: 'Подати заявку',
            listeners: {
                click: 'applySubmit'
            }
        }
    ]
});        



