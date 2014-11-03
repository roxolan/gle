Ext.define('Kmbsvle.view.auth.form.LoginFormController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.auth.form.login',

  requires: [
  ],

  routes: {
  },

  openMain: function() {
      Kmbsvle.app.getController('MainController').doLogon();
  }

}); 
