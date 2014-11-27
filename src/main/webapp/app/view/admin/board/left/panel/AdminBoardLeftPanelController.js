Ext.define('Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.admin.board.left.panel',
  
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


    openUserBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.auth.board.left.panel', 'auth_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.auth.board.center.userlist');
        me.changeRightPanel('widget.auth.board.right.userform', 'dummy', 'collapse');
        me.redirectTo('auth/board');
    },

    openGroupBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.group.board.left.panel', 'group_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.group.board.center.panel', 'group_board_center_panel_title');
        me.changeRightPanel('widget.group.board.right.panel', 'group_board_right_panel_title', 'collapse');
        me.redirectTo('group/board');
    },

    openLibraryBoard: function() {
        this.changeLeftPanel('widget.library.board.left.panel', 'library_board_left_panel_title', 'expand');
        this.changeCenterPanel('widget.library.board.center.panel', 'library_board_center_panel_title');
        this.changeRightPanel('widget.library.board.right.panel', 'library_board_right_panel_title', 'collapse');
        this.redirectTo('library/board');
    }

}); 
