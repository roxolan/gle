Ext.define('Kmbsvle.view.manage.board.left.panel.menu.ManageBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.manage.board.left.panel.menu',
  requires: [
    'Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanel',
    'Kmbsvle.view.group.board.center.panel.GroupBoardCenterPanel',
    'Kmbsvle.view.group.board.right.panel.GroupBoardRightPanel',

    'Kmbsvle.view.course.board.left.panel.CourseBoardLeftPanel',
    'Kmbsvle.view.course.board.center.panel.CourseBoardCenterPanel',
    'Kmbsvle.view.course.board.right.panel.CourseBoardRightPanel'

  ],
  routes: {
    'groups': 'openGroupBoard',
    'courses': 'openCourseBoard'
  },

  openGroupBoard: function() {
    this.changeLeftPanel('widget.group.board.left.panel', 'group_board_left_panel_title');
    this.changeCenterPanel('widget.group.board.center.panel', 'group_board_center_panel_title');
    this.changeRightPanel('widget.group.board.right.panel', 'group_board_right_panel_title');
    this.redirectTo('groups');
  },

  openCourseBoard: function() {
    this.changeLeftPanel('widget.course.board.left.panel', 'course_board_left_panel_title');
    this.changeCenterPanel('widget.course.board.center.panel', 'course_board_center_panel_title');
    this.changeRightPanel('widget.course.board.right.panel', 'course_board_right_panel_title');
    this.redirectTo('courses');
  },

  openCommunityBoard: function() {
    this.changeLeftPanel('widget.community.board.left.panel', 'community_board_left_panel_title');
    this.changeCenterPanel('widget.community.board.center.panel', 'community_board_center_panel_title');
    this.changeRightPanel('widget.community.board.right.panel', 'community_board_right_panel_title');
    this.redirectTo('communities');
  },

  onStatisticsClick: function() {
    var menuitem = this.lookupReference('menuitem_statistics');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'statistics');
  },


  onCalendarClick: function() {
    var menuitem = this.lookupReference('menuitem_calendar');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'calendar');
  },


  onReportClick: function() {
    var menuitem = this.lookupReference('menuitem_report');
    console.log(menuitem);
    Ext.Msg.alert('clicked!', 'report');
  }

});
