Ext.define('Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanelController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.auth.board.left.panel',

  openUserBoard: function() {
      var me = this;
      me.resizePanel('rightholder', 400);
  }

}); 
