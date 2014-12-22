Ext.define('Kmbsvle.view.course.single.form.CreateFormController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.single.form.create',

    requires: [

    ],
    
    openCourseLogoUploadForm: function() {
    	
    },

    addProfessorToCourse: function() {
        
    },
    
    courseFormReset: function() {
        this.getView().getForm().reset();
    },
    
    courseCreate: function() {
        this.getView().hide();
    }

});
