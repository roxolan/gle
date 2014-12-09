Ext.define('Kmbsvle.view.course.profboard.right.profile.CourseProfboardRightProfile', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.profboard.right.profile',
    controller: 'course.profboard.right.profile',
    viewModel: {
        type: 'course.profboard.right.profile'
    },
    requires: [
        'Kmbsvle.view.course.profboard.right.profile.CourseProfboardRightProfileController',
        'Kmbsvle.view.course.profboard.right.profile.CourseProfboardRightProfileModel'
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
                            reference: 'editBtn',
                            glyph: 'xf044@FontAwesome',
                            text: 'Редагувати',
                            listeners: {
                                click: 'editCourse'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'gotoBtn',
                            glyph: 'xf061@FontAwesome',
                            text: 'Перейти',
                            listeners: {
                                click: 'gotoCourse'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});



