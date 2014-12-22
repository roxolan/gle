Ext.define('Kmbsvle.view.course.single.form.CreateForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.course.single.form.create',
    modal: true,
    closable: false,
    floating: true,
    autoShow: true,

    requires: [
        'Ext.form.field.Text',
        'Kmbsvle.view.course.single.form.CreateFormController'
    ],
    controller: 'course.single.form.create',


    itemId: 'courseSingleFormCreate',

    title: 'Створити курс',
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
                    title: 'Загальна інформація',
                    defaultType: 'textfield',
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
                            defaultType: 'textfield',
                            defaults: {
                                // hideLabel: 'true'
                            },
                            items: [
                                { 
                                    name: 'courseTitle', 
                                    fieldLabel: 'Назва',
                                    labelWidth: 100,
                                    allowBlank: false,
                                    validateOnBlur: true, 
                                    emptyText: '',
                                    reference: 'singleCourseTitle',
                                    margin: '10 0 0 0',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                pack: 'start'
                            },
                            // defaultType: 'textfield',
                            // margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Код курсу',
                                    name: 'courseCode',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                }, 
                                {
                                    fieldLabel: 'Програма',
                                    xtype: 'combobox',
                                    // labelWidth: 100,
                                    name: 'lgroup'
                                    // width: 200
                                    // TODO add store
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                pack: 'start'
                            },
                            defaultType: 'textfield',
                            // margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Кількість годин',
                                    name: 'hours',
                                    labelWidth: 100,
                                    width: 140,
                                    flex: 1
                                },
                                {
                                    fieldLabel: 'Кількість кредитів',
                                    name: 'credits',
                                    labelWidth: 100,
                                    width: 140,
                                    margin: '0 0 0 200',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            // combineErrors: true,
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
                                    emptyText: 'Опис курсу',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'image',
                    autoRender: true,
                    src: 'resources/img/dummy_course_logo.png',
                    width: 64,
                    height: 64,
                    margin: '10 20 0 30',
                    listeners: {
                        el: {
                            click: 'openCourseLogoUploadForm'
                        }
                    }
                }
            ]
        },
        {
            layout: {
                type: 'vbox',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Викладачі',
                    // defaultType: 'textfield',
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
                            items: [
                                {
                                    fieldLabel: '',
                                    xtype: 'combobox',
                                    emptyText: 'оберіть викладача',
                                    labelWidth: 100,
                                    name: 'professor',
                                    flex: 1,
                                    width: 200
                                    // TODO add professor store
                                },
                                {
                                    xtype: 'image',
                                    autoRender: true,
                                    src: 'resources/img/add_professor_btn.png',
                                    width: 32,
                                    height: 32,
                                    margin: '0 0 0 20',
                                    listeners: {
                                        el: {
                                            click: 'addProfessorToCourse'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Модулі курсу',
                    width: 820
                    // visual tree to add, select, regroup course topics & subtopics
                },
                {
                    xtype: 'fieldset',
                    title: 'Завдання з курсу',
                    width: 820
                    // visual assignment creator buttons with datepickers etc.
                }


            ]

        }

    ],
    buttons: [
        {
            text: 'Перевантажити',
            listeners: {
                click: 'courseFormReset'
            }
        },
        { 
            text: 'Створити курс',
            listeners: {
                click: 'courseCreate'
            }
        }
    ]
});        



