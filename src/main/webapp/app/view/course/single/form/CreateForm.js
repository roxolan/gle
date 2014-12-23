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
                    width: 700,
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
                            defaultType: 'textfield',
                            // margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Програма',
                                    labelWidth: 100,
                                    name: 'lgroup',
                                    width: 200,
                                    flex: 2
                                    // TODO add store
                                },
                                {
                                    fieldLabel: 'Код курсу',
                                    hideLabel: 'true',
                                    name: 'courseCode',
                                    emptyText: 'код курсу',
                                    width: 150,
                                    margin: '0 0 0 10',
                                    flex: 2
                                },
                                {
                                    fieldLabel: 'Кількість годин',
                                    hideLabel: 'true',
                                    name: 'hours',
                                    emptyText: 'години',
                                    width: 70,
                                    margin: '0 0 0 10',
                                    flex: 1
                                },
                                {
                                    fieldLabel: 'Кількість кредитів',
                                    hideLabel: 'true',
                                    name: 'credits',
                                    emptyText: 'кредити',
                                    width: 70,
                                    margin: '0 0 0 10',
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
                    // xtype: 'image',
                    xtype: 'filefield',
                    autoRender: true,
                    buttonOnly: true,
                    hideLabel: true,
                    buttonConfig: {
                        text: '',
                        // icon: 'resources/img/dummy_course_logo.png',
                        // iconCls: 'course-logo-update-btn',
                        glyph: 'xf0a2@FontAwesome',
                        width: 64,
                        height: 64,
                        scale: 'large'
                    },
                    margin: '10 50 0 30'
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
                                    xtype: 'menu',
                                    // width: 210,
                                    height: 32,
                                    floating: false,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'end'
                                    },
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            reference: 'courseCreationFormFirstProfessor',
                                            text: 'Ім\'я викладача',
                                            glyph: 'xf19d@FontAwesome',
                                            listeners: {
                                                click: 'openProfessorProfileEdit'
                                            }
                                        }
                                    ]
                                    // flex: 1
                                },
                                {
                                    fieldLabel: '',
                                    xtype: 'combobox',
                                    emptyText: 'оберіть другого викладача',
                                    labelWidth: 100,
                                    name: 'professor',
                                    // flex: 1,
                                    width: 200,
                                    height: 32,
                                    margin: '0 0 0 20'
                                    // TODO add second professor store
                                },
                                {
                                    xtype: 'button',
                                    autoRender: true,
                                    text: '',
                                    // src: 'resources/img/add_professor_btn.png',
                                    // iconCls: 'professor-add-to-course-btn',
                                    glyph: 'xf19d@FontAwesome',
                                    width: 32,
                                    height: 32,
                                    scale: 'small',
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
            text: 'Очистити',
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



