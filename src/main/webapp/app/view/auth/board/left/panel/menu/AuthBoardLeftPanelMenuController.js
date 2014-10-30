Ext.define('Kmbsvle.view.auth.board.left.panel.menu.AuthBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.auth.board.left.panel.menu',

  requires: [
  ],

  routes: {
  },

/* TODO develop the method on openUserBoard - to open users board panels */
  openUserBoard: function() {
    var menuitem = this.lookupReference('auth_board_user_board');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'users');
  }

}); 
