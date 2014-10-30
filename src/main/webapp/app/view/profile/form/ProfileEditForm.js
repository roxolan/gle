Ext.define('Kmbsvle.view.profile.form.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile.form.edit',
    autoShow: true,
    modal: true,

    requires: [
        'Ext.form.Panel'
    ],

    title: 'Testing Profile Edit Form',

    items: [
        {
            xtype: 'form',
            flex: 1,
            minWidth: 200,
            minHeigth: 150,
            bodyPadding: 5,
            anchor: '100%',
            items: [
                { xtype: 'textfield', name: 'firstName', fieldLabel: 'Ім\'я', flex: 1 },
                { xtype: 'textfield', name: 'lastName', fieldLabel: 'Прізвище', flex: 1 }
            ]
        }
    ]




});
