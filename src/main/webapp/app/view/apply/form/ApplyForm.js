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
    width: 835,
            
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
                    width: 705,
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
                                    flex: 1
                                }, 
                                {
                                    fieldLabel: 'Моб. телефон',
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
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Особистий email',
                                    name: 'email',
                                    vtype: 'email',
                                    flex: 1
                                }, 
                                {
                                    fieldLabel: 'Роб. телефон',
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
                    width: 820,
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
        },
        {
            layout: {
                type: 'hbox',
                pack: 'start'                    
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Адреса (фактична)',
                    width: 405,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            margin: '35 0 5 0',
                            layout: {
                                type: 'hbox',
                                pack: 'start'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'factAddrStreet',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'вулиця',
                                    flex: 5                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'factAddrHouse',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'буд.',
                                    margin: '0 0 0 30',
                                    flex: 1                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'factAddrApt',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'кв.',
                                    margin: '0 0 0 20',
                                    flex: 1                                                        
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
                                    name: 'factAddrCity',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'місто',
                                    flex: 3                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'factAddrZipcode',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'індекс',
                                    margin: '0 0 0 20',
                                    flex: 2                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'factAddrCountry',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'країна',
                                    margin: '0 0 0 20',
                                    flex: 2                                                        
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Постійна адреса (прописка)',
                    width: 405,
                    margin: '0 0 0 10',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'checkbox',
                            name: 'permanentSameAsFactual',
                            boxLabel: 'Співпадає з фактичною адресою?',
                            hideLabel: true,
                            checked: true,
                            margin: '0 0 10 0',
                            listeners: {
                                activate: 'onSameAddressChange',
                                change: 'onSameAddressChange'
                            }
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
                                    name: 'permAddrStreet',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'вулиця',
                                    flex: 5,
                                    style: 'opacity:.3'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'permAddrHouse',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'буд.',
                                    margin: '0 0 0 30',
                                    flex: 1,                                                        
                                    style: 'opacity:.3'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'permAddrApt',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'кв.',
                                    margin: '0 0 0 20',
                                    flex: 1,
                                    style: 'opacity:.3'
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
                                    name: 'permAddrCity',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'місто',
                                    flex: 3,
                                    style: 'opacity:.3'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'permAddrZipcode',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'індекс',
                                    margin: '0 0 0 20',
                                    flex: 2,
                                    style: 'opacity:.3'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'permAddrCountry',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'країна',
                                    margin: '0 0 0 20',
                                    flex: 2,
                                    style: 'opacity:.3'
                                }
                            ]
                        } 
                    ]
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
                    title: 'Професійний досвід (найбільш нещодавній)',
                    width: 405,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'company1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'компанія',
                                    width: 300,
                                    labelWidth: 100,
                                    flex: 2
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'position1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'посада / роль',
                                    margin: '0 0 0 20',
                                    width: 100,
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'period1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'період',
                                    margin: '0 0 0 20',
                                    width: 100,
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textarea',
                                    grow: true,
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'Обов\'язки та досягнення',
                                    width: 382
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Професійний досвід (нещодавній)',
                    width: 405,
                    layout: 'anchor',
                    margin: '0 0 0 10',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'company1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'компанія',
                                    width: 300,
                                    labelWidth: 100,
                                    flex: 2
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'position1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'посада / роль',
                                    margin: '0 0 0 20',
                                    width: 100,
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'period1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'період',
                                    margin: '0 0 0 20',
                                    width: 100,
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textarea',
                                    grow: true,
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'Обов\'язки та досягнення',
                                    width: 382
                                }
                            ]
                        }
                    ]
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
                    title: 'Освіта (найбільш нещодавня)',
                    width: 405,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'educUniversity1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'назва закладу',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'educDegree1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'ступінь',
                                    margin: '0 0 0 20',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'educSpecialty1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'спеціальність',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'educDateGrad1',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'дата зак.',
                                    margin: '0 0 0 20',
                                    flex: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Освіта',
                    width: 405,
                    layout: 'anchor',
                    margin: '0 0 0 10',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'educUniversity2',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'назва закладу',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'educDegree2',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'ступінь',
                                    margin: '0 0 0 20',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'educSpecialty2',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'спеціальність',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'educDateGrad2',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'дата зак.',
                                    margin: '0 0 0 20',
                                    flex: 2
                                }
                            ]
                        }
                    ]
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
                    title: 'Рекомендації',
                    width: 820,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson1FirstName',
                                    fieldLabel: 'Рекомендант 1',
                                    labelAlign: 'right',
                                    emptyText: 'ім\'я',
                                    labelWidth: 100,
                                    flex: 4
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson1LastName',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'прізвище',
                                    margin: '0 0 0 20',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson1Company',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'компанія',
                                    margin: '0 0 0 20',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson1Position',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'посада',
                                    margin: '0 0 0 20',
                                    flex: 2
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson1Telephone',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'телефон',
                                    margin: '0 0 0 20',
                                    flex: 2
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson2FirstName',
                                    fieldLabel: 'Рекомендант 2',
                                    labelAlign: 'right',
                                    emptyText: 'ім\'я',
                                    labelWidth: 100,
                                    flex: 4
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson2LastName',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'прізвище',
                                    margin: '0 0 0 20',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson2Company',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'компанія',
                                    margin: '0 0 0 20',
                                    flex: 3
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson2Position',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'посада',
                                    margin: '0 0 0 20',
                                    flex: 2
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'recommPerson2Telephone',
                                    fieldLabel: '',
                                    hideLabel: 'true',
                                    emptyText: 'телефон',
                                    margin: '0 0 0 20',
                                    flex: 2
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
            text: 'Оновити',
            listeners: {
                click: 'applyReset'
            }
        },
        { 
            text: 'Подати заявку',
            listeners: {
                click: 'applySubmit'
            }
        }
    ]
});        



