Ext.define('Kmbsvle.view.admin.board.left.panel.AdminBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.admin.board.left.panel',
  
    requires: [
        'Kmbsvle.view.auth.board.left.panel.AuthBoardLeftPanel',
        
        'Kmbsvle.view.lgroup.board.left.menu.LgroupBoardLeftMenu',
        'Kmbsvle.view.lgroup.board.center.lgrouplist.LgroupBoardCenterLgrouplist',
        'Kmbsvle.view.lgroup.board.right.lgroupform.LgroupBoardRightLgroupform',
        
        'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanel',
        'Kmbsvle.view.community.board.center.panel.CommunityBoardCenterPanel',
        'Kmbsvle.view.community.board.right.panel.CommunityBoardRightPanel',
        
        'Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanel',
        'Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanel',
        'Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanel'
    ],

    routes: {
        'library/board' : 'openLibraryBoard',
        'auth/board' : 'openAuthBoard',
        'community/board' : 'openCommunityBoard',
        'lgroup/board' : 'openLgroupBoard'

    },


    openUserBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.auth.board.left.panel', 'auth_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.auth.board.center.userlist');
        me.changeRightPanel('widget.auth.board.right.userform', 'dummy', 'collapse');
        me.redirectTo('auth/board');
    },

    openLgroupBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.lgroup.board.left.menu', 'lgroup_board_left_menu_title', 'expand');
        me.changeCenterPanel('widget.lgroup.board.center.lgrouplist');
        me.changeRightPanel('widget.lgroup.board.right.lgroupform', 'dummy', 'collapse');
        me.redirectTo('lgroup/board');
    },
    
    openCommunityBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.community.board.left.panel', 'community_board_left_panel_title');
        me.changeCenterPanel('widget.community.board.center.panel');
        me.changeRightPanel('widget.community.board.right.panel', 'community_board_right_panel_title');
        me.redirectTo('community/board');
    },

    openLibraryBoard: function() {
        this.changeLeftPanel('widget.library.board.left.panel', 'library_board_left_panel_title', 'expand');
        this.changeCenterPanel('widget.library.board.center.panel', 'library_board_center_panel_title');
        this.changeRightPanel('widget.library.board.right.panel', 'library_board_right_panel_title', 'collapse');
        this.redirectTo('library/board');
    }

}); 
