Ext.define('Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPad', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.course.selection.stud.right.pad',
    controller: 'course.selection.stud.right.pad',
    viewModel: {
        type: 'course.selection.stud.right.pad'
    },
    requires: [
        'Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPadController',
        'Kmbsvle.view.course.selection.stud.right.pad.CourseSelectionStudRightPadModel'    
    ],
    bodyPadding: 10,

    items: [
        {
            xtype: 'panel',
            padding: 10,
            width: 400,
            title: 'Курс',
            items: [         
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
                            reference: 'goToCourseBtn',
                            glyph: 'xf061@FontAwesome',
                            text: 'Перейти',
                            listeners: {
                                click: 'goToCourse'
                            }
                        }
                    ]
                }
            ]
        }
    ]


});