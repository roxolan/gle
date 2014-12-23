Ext.define('Kmbsvle.view.course.single.form.CreateFormController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.single.form.create',

    requires: [

    ],
    
    openCourseLogoUploadForm: function() {
        Ext.Msg.alert('Opened upload form', 'to upload course logo');
    },

    addProfessorToCourse: function() {
        
    },
    
    courseFormReset: function() {
        this.getView().getForm().reset();
    },
    
    courseCreate: function() {
        this.getView().hide();
    },

    setProfessor1Name: function() {
        var me = this;
        var menuitem = me.lookupReference('courseCreationFormFirstProfessor');
        var fullname = Kmbsvle.getApplication().getUser().fullName;

        menuitem.setConfig('text', fullname);
    },

    openProfessorProfileEdit: function() {
        Ext.create('widget.profile.form.edit');
    },

    control: {
        '#': {
            afterrender: 'setProfessor1Name'
        }
    }

});
