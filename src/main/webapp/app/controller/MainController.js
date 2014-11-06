Ext.define('Kmbsvle.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    init: function(application) {
        var me = this;
        me.control({
        });
    },
    
    doLogon: function(username, password) {
        Ext.Ajax.request({
            url: 'security/logon.json',
            params: {
                username: username,
                password: password
            },
            success: function(response) {
                var responseT = response.responseText;
                Kmbsvle.console(responseT);
            }
        });
        Kmbsvle.getApplication().doAfterLogon();
    }
});


