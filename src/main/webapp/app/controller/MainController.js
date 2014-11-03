Ext.define('Kmbsvle.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    init: function(application) {
        var me = this;
        me.control({
        });
    },
    
    doLogon: function() {
        Kmbsvle.getApplication().doAfterLogon();
    }
});


