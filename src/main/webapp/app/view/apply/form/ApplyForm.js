Ext.define('Kmbsvle.view.apply.form.ApplyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.apply.form',
    controller: 'apply.form',
    modal: true,
    closable: false,
    autoRender: true,
    floating: true,

    requires: [
        'Ext.form.field.Text',
        'Kmbsvle.view.apply.form.ApplyFormController'
    ],
    
    itemId: 'applyForm',

    title: 'Аплікаційна форма',
    frame: true,
    bodyPadding: 5,
    width: 550,
    height: 300,

    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            //width: 550,
            
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
            },
            
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Контактна інформація',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'П.І.Б.',
                            layout: 'hbox',
                            combineErrors: true,
                            defaultType: 'textfield',
                            defaults: {
                                hideLabel: 'true'
                            },
                            items: [
                                { 
                                    name: 'firstName', 
                                    fieldLabel: 'Ім\'я', 
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'ім\'я',
                                    reference: 'firstName',
                                    flex: 2                      
                                },
                                { 
                                    name: 'patronymicName', 
                                    fieldLabel: 'По-батькові',
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'по-батькові',
                                    reference: 'patronymicName',
                                    flex: 2
                                },
                                { 
                                    name: 'lastName', 
                                    fieldLabel: 'Прізвище',
                                    allowBlank: false, 
                                    validateOnBlur: true, 
                                    emptyText: 'прізвище',
                                    reference: 'lastName',
                                    flex: 3
                                }                               
                            ]
                        }
                    ]
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
        });        
        me.callParent(arguments);
    }
        
});



