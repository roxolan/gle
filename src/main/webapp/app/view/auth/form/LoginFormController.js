Ext.define('Kmbsvle.view.auth.form.LoginFormController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.auth.form.login',

  requires: [
    //'Kmbsvle.controller.MainController'
  ],

  routes: {
  },

  openMain: function() {
      Kmbsvle.app.getController('MainController').instantiateMain();
  }

}); 
