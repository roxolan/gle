Ext.define('Kmbsvle.view.admin.board.left.panel.menu.AdminBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.admin.board.left.panel.menu',

  requires: [
    'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanel',
    'Kmbsvle.view.auth.board.center.panel.AuthBoardCenterPanel',
    'Kmbsvle.view.auth.board.right.panel.AuthBoardRightPanel',

    'Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanel',
    'Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanel',
    'Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanel'
  ],

  routes: {
    'library/board' : 'openLibraryBoard',
    'auth/board' : 'openAuthBoard'
  },


  openAuthBoard: function() {
    this.changeLeftPanel('widget.auth.board.left.panel', 'auth_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.auth.board.center.panel', 'auth_board_center_panel_title');
    this.changeRightPanel('widget.auth.board.right.panel', 'auth_board_right_panel_title', 'collapse');
    this.redirectTo('auth/board');
  },

  // VESTIGIUM --> refactor openGroup - remove from here, fix where it
  // should be
/* TODO make Group Board open, refactor Group to Group Single and
  Group Board */
  openGroupBoard: function() {
    var menuitem = this.lookupReference('menuitem_groups');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'groups');
  },

  openLibraryBoard: function() {
    this.changeLeftPanel('widget.library.board.left.panel', 'library_board_left_panel_title', 'expand');
    this.changeCenterPanel('widget.library.board.center.panel', 'library_board_center_panel_title');
    this.changeRightPanel('widget.library.board.right.panel', 'library_board_right_panel_title', 'collapse');
    this.redirectTo('library/board');
  }

}); 
