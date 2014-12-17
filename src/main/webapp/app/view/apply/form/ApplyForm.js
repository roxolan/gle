Ext.define('Kmbsvle.view.apply.form.ApplyForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.apply.form',
    controller: 'apply.form',
    modal: true,
    closable: false,

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Kmbsvle.view.apply.form.ApplyFormController'
    ],

    title: 'Аплікаційна форма',

    items: [
        {
            xtype: 'form',
            flex: 1,
            width: 320,
            bodyPadding: 10,
            defaultType: 'textfield',

            items: [
                { 
                    name: 'firstName', 
                    fieldLabel: 'Ім\'я', 
                    allowBlank: false, 
                    validateOnBlur: true, 
                    emptyText: 'ім\'я',
                    reference: 'firstName'
                },
                { 
                    name: 'lastName', 
                    fieldLabel: 'Прізвище',
                    allowBlank: false, 
                    validateOnBlur: true, 
                    emptyText: 'прізвище',
                    reference: 'lastName'
                }
            ],
            buttons: [
                { 
                    text: 'Подати заявку',
                    listeners: {
                        click: 'applySubmit'
                    }
                }
            ]
        }
    ]
    
});



