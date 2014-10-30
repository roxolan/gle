Ext.define('Kmbsvle.view.message.board.left.panel.menu.MessageBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.message.board.left.panel.menu',

  requires: [
  ],

  routes: {
  },

  openMessageSingleWindow: function() {
    var menuitem = this.lookupReference('message_board_message_single');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'single message');
  }

}); 
