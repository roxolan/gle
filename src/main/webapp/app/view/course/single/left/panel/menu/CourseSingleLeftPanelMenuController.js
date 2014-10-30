Ext.define('Kmbsvle.view.course.single.left.panel.menu.CourseSingleLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.course.single.left.panel.menu',

  requires: [
    'Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanel',
    'Kmbsvle.view.content.board.center.panel.ContentBoardCenterPanel',
    'Kmbsvle.view.content.board.right.panel.ContentBoardRightPanel',

    'Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanel',
    'Kmbsvle.view.assign.board.center.panel.AssignBoardCenterPanel',
    'Kmbsvle.view.assign.board.right.panel.AssignBoardRightPanel',

    // VESTIGIUM --> distribute deps of chat.board
    // chat.single is a modal window
    'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanel',
    'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanelController',
    'Kmbsvle.view.chat.board.left.panel.ChatBoardLeftPanelModel',
    'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanel',
    'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanelController',
    'Kmbsvle.view.chat.board.center.panel.ChatBoardCenterPanelModel',
    'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanel',
    'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanelController',
    'Kmbsvle.view.chat.board.right.panel.ChatBoardRightPanelModel'


  ],

  routes: {
    'content' : 'openContentBoard',
    'assignments' : 'openAssignBoard',
    'chat' : 'openChatBoard'
  },

  openContentBoard: function() {
    var me = this;
    me.changeLeftPanel('widget.content.board.left.panel', 'content_board_left_panel_title', 'expand');
    me.changeCenterPanel('widget.content.board.center.panel', 'content_board_center_panel_title');
    me.changeRightPanel('widget.content.board.right.panel', 'content_board_right_panel_title', 'collapse');
    me.redirectTo('content');    
  },

  openAssignBoard: function() {
    var me = this;
    me.changeLeftPanel('widget.assign.board.left.panel', 'assign_board_left_panel_title', 'expand');
    me.changeCenterPanel('widget.assign.board.center.panel', 'assign_board_center_panel_title');
    me.changeRightPanel('widget.assign.board.right.panel', 'assign_board_right_panel_title', 'collapse');
    me.redirectTo('assignments');    
  },

  openChatBoard: function() {
    
    var userSelectedLocale = 'uk';
    var lhld = Ext.getCmp('leftholder');
    var chld = Ext.getCmp('centerholder');
    var rhld = Ext.getCmp('rightholder');
    var chatBoardLeftPanel = Ext.create('widget.chat.board.left.panel');
    var chatBoardCenterPanel = Ext.create('widget.chat.board.center.panel');
    var chatBoardRightPanel = Ext.create('widget.chat.board.right.panel');        
    
    lhld.removeAll();
    lhld.add(chatBoardLeftPanel);
    lhld.collapse();

    chld.removeAll();
    chld.add(chatBoardCenterPanel);
    
    rhld.removeAll();
    rhld.add(chatBoardRightPanel);
    rhld.expand();
    
    if (userSelectedLocale === 'en') {
      var leftTitle = chatBoardLeftPanel.getViewModel().getData().en.chat_board_left_panel_title;
      var rightTitle = chatBoardRightPanel.getViewModel().getData().en.chat_board_right_panel_title;
    } else if (userSelectedLocale === 'uk') {
      var leftTitle = chatBoardLeftPanel.getViewModel().getData().uk.chat_board_left_panel_title;
      var rightTitle = chatBoardRightPanel.getViewModel().getData().uk.chat_board_right_panel_title;
    }
    
    lhld.setConfig('title', leftTitle);
    rhld.setConfig('title', rightTitle);
    
    this.redirectTo('chat');
    
  }



}); 
