Ext.define('Kmbsvle.view.course.board.prof.right.profile.CourseBoardProfRightProfile', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.prof.right.profile',
    controller: 'course.board.prof.right.profile',
    viewModel: {
        type: 'course.board.prof.right.profile'
    },
    requires: [
        'Kmbsvle.view.course.board.prof.right.profile.CourseBoardProfRightProfileController',
        'Kmbsvle.view.course.board.prof.right.profile.CourseBoardProfRightProfileModel'
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



