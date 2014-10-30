Ext.define('Kmbsvle.view.toppanel.ToppanelController', {
  extend: 'Kmbsvle.view.base.BaseViewController',
  
  alias: 'controller.toppanel',
  
  requires: [    
  ],
  
  routes: {
    'login': 'openLogin',
    'welcome': 'openWelcome'
  },
  
  openLogin: function() {
    Ext.create('widget.login.form');
  },
  
  openWelcome: function() {
    Ext.create('widget.welcome.informer');
  },
  
  openMain: function() {
    this.redirectTo('#');
    location.reload();
  }

});
