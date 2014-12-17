Ext.define('Kmbsvle.view.course.board.stud.right.profile.CourseBoardStudRightProfile', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.stud.right.profile',
    controller: 'course.board.stud.right.profile',
    viewModel: {
        type: 'course.board.stud.right.profile'
    },
    requires: [
        'Kmbsvle.view.course.board.stud.right.profile.CourseBoardStudRightProfileController',
        'Kmbsvle.view.course.board.stud.right.profile.CourseBoardStudRightProfileModel'
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



