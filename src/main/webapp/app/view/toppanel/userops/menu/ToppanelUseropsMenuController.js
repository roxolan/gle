Ext.define('Kmbsvle.view.toppanel.userops.menu.ToppanelUseropsMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.toppanel.userops.menu',

  requires: [
    'Kmbsvle.view.profile.form.Edit'
  ],

  openProfileEdit: function() {
    Ext.create('widget.profile.form.edit');
  },

  setUserName: function() {
    var userSelectedLocale = 'uk';

    var menuitem = this.lookupReference('userops_username');
    if (userSelectedLocale === 'en') {
      var username = this.getViewModel().getData().en.toppanel_username;
    } else if (userSelectedLocale === 'uk') {
      var username = this.getViewModel().getData().uk.toppanel_username;
    }

    menuitem.setConfig('text', username);
  },

  control: {
    '#': {
      afterrender: 'setUserName'
    }
  }

}); 
