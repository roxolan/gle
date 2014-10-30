Ext.define('Kmbsvle.view.community.single.left.panel.menu.CommunitySingleLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.community.single.left.panel.menu',
  requires: [
    'Kmbsvle.view.event.board.left.panel.EventBoardLeftPanel',
    'Kmbsvle.view.event.board.center.panel.EventBoardCenterPanel',
    'Kmbsvle.view.event.board.right.panel.EventBoardRightPanel'
  ],

  routes: {
    'community/events' : 'openEventsBoard'
  },

  openEventsBoard: function() {
    this.changeLeftPanel('widget.event.board.left.panel', 'event_board_left_panel_title', 'collapse');
    this.changeCenterPanel('widget.event.board.center.panel', 'event_board_center_panel_title');
    this.changeRightPanel('widget.event.board.right.panel', 'event_board_right_panel_title', 'expand');
    this.redirectTo('community/events');
  }

}); 
