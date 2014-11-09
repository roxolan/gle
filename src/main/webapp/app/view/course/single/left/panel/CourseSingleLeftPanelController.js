Ext.define('Kmbsvle.view.course.single.left.panel.CourseSingleLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.course.single.left.panel',
  
    requires: [
        'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanel',
        'Kmbsvle.view.content.board.center.panel.ContentBoardCenterPanel',
        'Kmbsvle.view.content.board.right.panel.ContentBoardRightPanel',

        'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanel',
        'Kmbsvle.view.assign.board.center.panel.AssignBoardCenterPanel',
        'Kmbsvle.view.assign.board.right.panel.AssignBoardRightPanel',

        // chat.single is a modal window
        'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanel',
        'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanel',
        'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanel'
    ],

    routes: {
        'content' : 'openContentBoard',
        'assignments' : 'openAssignBoard',
        'chat' : 'openChatBoard'
    },

    openContentBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.content.board.left.panel', 'content_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.content.board.center.panel');
        me.changeRightPanel('widget.content.board.right.panel', 'content_board_right_panel_title', 'collapse');
        me.redirectTo('content');    
    },

    openAssignBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.assign.board.left.panel', 'assign_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.assign.board.center.panel');
        me.changeRightPanel('widget.assign.board.right.panel', 'assign_board_right_panel_title', 'collapse');
        me.redirectTo('assignments');    
    },

    openChatBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.chat.board.left.panel', 'chat_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.chat.board.center.panel');
        me.changeRightPanel('widget.chat.board.right.panel', 'chat_board_right_panel_title', 'collapse');
        me.redirectTo('chats');
    }

}); 
