Ext.define('Kmbsvle.view.social.board.left.panel.menu.SocialBoardLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.social.board.left.panel.menu',

  requires: [

    // LOCUS --> distribute deps at community.board

    'Kmbsvle.view.community.board.left.panel.CommunityBoardLeftPanel',
    'Kmbsvle.view.community.board.center.panel.CommunityBoardCenterPanel',
    'Kmbsvle.view.community.board.right.panel.CommunityBoardRightPanel',

    'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanel',
    'Kmbsvle.view.community.single.center.panel.CommunitySingleCenterPanel',
    'Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanel'

  ],

  /*
    onFirstItemClick: function() {
    var item = this.lookupReference('first_item');
    var viewmodel = item.ownerCt.getViewModel();
    console.log(item.ownerCt.getViewModel().data.user_groups);
    var comb = 'Clicked the following:' + ' ' + 'first_item';
    Ext.Msg.alert('Click!', comb);
    },
  */

  routes: {
    'community/board': 'openCommunityBoard',
    'community/1': 'openCommunitySingle'
  },

  openCommunitySingle: function() {
    var me = this;
    me.changeLeftPanel('widget.community.single.left.panel', 'community_single_left_panel_title', 'expand');
    me.changeCenterPanel('widget.community.single.center.panel', 'community_single_center_panel_title');
    me.changeRightPanel('widget.community.single.right.panel', 'community_single_right_panel_title', 'collapse');
    me.redirectTo('community/1');
  },

  openCommunityBoard: function() {
    var me = this;
    me.changeLeftPanel('widget.community.board.left.panel', 'community_board_left_panel_title', 'expand');
    me.changeCenterPanel('widget.community.board.center.panel', 'community_board_center_panel_title');
    me.changeRightPanel('widget.community.board.right.panel', 'community_board_right_panel_title', 'collapse');
    me.redirectTo('community/board');
  }


});
