Ext.define('Kmbsvle.view.course.board.alum.right.profile.CourseBoardAlumRightProfile', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.course.board.alum.right.profile',
    controller: 'course.board.alum.right.profile',
    viewModel: {
        type: 'course.board.alum.right.profile'
    },
    requires: [
        'Kmbsvle.view.course.board.alum.right.profile.CourseBoardAlumRightProfileController',
        'Kmbsvle.view.course.board.alum.right.profile.CourseBoardAlumRightProfileModel'
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



