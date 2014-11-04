Ext.define('Kmbsvle.view.auth.form.LoginFormController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.auth.form.login',

  requires: [
  ],

  routes: {
  },
  
  control: {
      
  },

  openMain: function() {
      var me = this;
      var username = me.lookupReference('username').getValue();
      var password = me.lookupReference('password').getValue();
      
      console.log('The username is: ' + username);
      console.log('The password is: ' + password);
      
      // Later insert username, password as arguments and overload this method
      Kmbsvle.app.getController('MainController').doLogon(username, password);
      
  }

}); 
