Ext.define('Kmbsvle.view.group.board.left.panel.menu.GroupBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.group.board.left.panel.menu',

  requires: [
    'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanel',
    'Kmbsvle.view.group.single.center.panel.GroupSingleCenterPanel',
    'Kmbsvle.view.group.single.right.panel.GroupSingleRightPanel'
  ],

  routes: {
    'group': 'openGroupSingle'
  },


  openGroupSingle: function() {
    this.changeLeftPanel('widget.group.single.left.panel', 'group_single_left_panel_title', 'expand');
    this.changeCenterPanel('widget.group.single.center.panel', 'group_single_center_panel_title');
    this.changeRightPanel('widget.group.single.right.panel', 'group_single_right_panel_title', 'collapse');
    this.redirectTo('group');
  }

}); 
