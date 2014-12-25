Ext.define('Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.admin.board.left.panel',
  
    requires: [
        'Kmbsvle.view.auth.board.left.menu.AuthBoardLeftMenu',
        
        'Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanel',
        'Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanel',
        'Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanel'
    ],

    routes: {
        'auth/board' : 'openUserBoard',
        'library/board' : 'openLibraryBoard'
    },


    openUserBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.auth.board.left.menu', 'auth_board_left_menu_title', 'expand');
        me.changeCenterPanel('widget.auth.board.center.userlist');
        me.changeRightPanel('widget.auth.board.right.userform', 'dummy', 'collapse');
        me.redirectTo('auth/board');
    },

    openLibraryBoard: function() {
        this.changeLeftPanel('widget.library.board.left.panel', 'library_board_left_panel_title', 'expand');
        this.changeCenterPanel('widget.library.board.center.panel', 'library_board_center_panel_title');
        this.changeRightPanel('widget.library.board.right.panel', 'library_board_right_panel_title', 'collapse');
        this.redirectTo('library/board');
    }

}); 
