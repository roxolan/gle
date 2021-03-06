Ext.define('Kmbsvle.view.course.board.manage.right.form.CourseBoardManageRightFormController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.board.manage.right.form',
    
    deleteCourse: function(){
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();
        var courseBoardLeftMenuController = Ext.getCmp('leftholder').getComponent('courseBoardManageLeftMenu').getController();

        Ext.Msg.confirm(
            'Підтвердіть видалення курсу', 
            'Ви впевнені, що бажаєте видалити курс ' + record.get('courseTitle') + '?',
            function(btn) {
                if (btn === 'yes') {
                    // try {
                        Ext.Ajax.request({
                            url: 'course/remove.json',
                            params: {
                                data: Ext.JSON.encode(record.data)
                            },
                            success: function() {
                                me.refreshStore();
                            }
                        });
                    /* 
                        FOR SOME REASON??? .destroy() does not get through, so using direct Ext.Ajax.request() as above
                        record.destroy({
                            success: function(record, operation) {
                                Kmbsvle.console(operation);
                            },
                            failure: function(record, operation) {
                                Ext.Msg.alert('Не вдалося видалити', operation.request.scope.reader.jsonData.msg);
                            }
                        });
                    */
                    // } catch (ConstraintViolationException) {
                    //    throw new ConstraintViolationException("can not delete record: ", e);
                    // }
                    courseBoardLeftMenuController.addCourse();
                }
            });
    },
    
    saveCourse: function() {
        var me = this;
        var form = me.getView().getForm();
        var record = form.getRecord();

        if (!Ext.isEmpty(record)) {
            form.updateRecord();
            var errs = record.validate();
            if (errs.isValid()) {
                record.save({
                    success: function(record, operation) {
                        if (typeof record.store === 'undefined') {
                            Ext.getCmp('centerholder').getComponent('courseBoardManageCenterList').getStore('coursemanagelist').add(record);
                        }
                    },
                    failure: function(record, operation) {
                        Ext.Msg.alert('Save Failure', operation.request.scope.reader.jsonData.msg);
                    }
                });
            } else {
                form.markInvalid(errs);
                Ext.Msg.alert('Invalid Fields', 'Please fix the invalid entries!');
            }           
        }
    },
    
    refreshStore: function() {
        var me = this;
        var courseBoardCenterListStore = Ext.getCmp('centerholder').getComponent('courseBoardManageCenterList').getStore('coursemanagelist');
        
        courseBoardCenterListStore.load();
    }


}); 
