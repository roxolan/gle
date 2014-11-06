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
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.success) {
                    Kmbsvle.console(obj.data);
                    Kmbsvle.getApplication().doAfterLogon(obj.data);
                } else {
                    Ext.Msg.alert('Невірні дані входу', 'Будь ласка, введіть дійсні ID та пароль');
                }
            }
        });
        
    }
});


