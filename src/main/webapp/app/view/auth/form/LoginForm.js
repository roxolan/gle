Ext.define('Kmbsvle.view.auth.form.LoginForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.auth.login.form',
    controller: 'auth.form.login',
    //autoShow: true,
    modal: true,
    closable: false,

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Kmbsvle.view.auth.form.LoginFormController'
    ],

    title: 'Форма входу',

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
                    text:'Ввійти',
                    listeners: {
                        click: 'openMain'
                    }
                }
            ]
        }
    ]
    
});
