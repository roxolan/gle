Ext.define('Kmbsvle.view.notify.WelcomeInformer', {
    extend: 'Ext.window.Window',
    alias: 'widget.welcome.informer',
    autoShow: true,
    modal: true,

    requires: [
    ],

    title: 'Привітання',
    height: 400,
    width: 500,
    autoScroll: true,
    bodyPadding: 10,
    html: 'Оновлення трьох типів',

    bbar: [
        {xtype: 'button', text: 'Добре'}
    ]

});
