Ext.define('Kmbsvle.view.form.LoginForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.login.form',
    autoShow: true,
    modal: true,

    requires: [
        'Ext.form.Panel'
    ],

    title: 'Login Form',

    items: [
        {
            xtype: 'form',
            flex: 1,
            width: 320,
            bodyPadding: 10,
            defaultType: 'textfield',

            items: [
                { name: 'user', fieldLabel: 'ID користувача', allowBlank: false, emptyText: 'id' },
                { name: 'password', fieldLabel: 'Пароль', allowBlank: false, emptyText: 'пароль' }
            ],
            buttons: [
                { text:'Ввійти' }
            ]
        }
    ]




});
