Ext.define('Kmbsvle.view.auth.form.UserAddForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.auth.user.add.form',
    controller: 'auth.form.useradd',
    //autoShow: true,
    modal: true,
    closable: false,

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Kmbsvle.view.auth.form.UserAddFormController'
    ],

    title: 'Додати користувача',

    items: [
        {
            xtype: 'form',
            flex: 1,
            width: 320,
            bodyPadding: 10,
            defaultType: 'textfield',

            items: [
                { 
                    name: 'user', 
                    fieldLabel: 'ID користувача', 
                    allowBlank: false, 
                    validateOnBlur: true, 
                    emptyText: 'id',
                    reference: 'username'
                },
                { 
                    name: 'password', 
                    fieldLabel: 'Пароль',
                    inputType: 'password',
                    allowBlank: false, 
                    validateOnBlur: true, 
                    emptyText: 'пароль',
                    reference: 'password'
                }
            ],
            buttons: [
                { 
                    text:'Додати',
                    listeners: {
                        // click: 'openMain'
                    }
                }
            ]
        }
    ]
    
});
