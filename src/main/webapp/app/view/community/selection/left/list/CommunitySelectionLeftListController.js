Ext.define('Kmbsvle.view.community.selection.left.list.CommunitySelectionLeftListController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.community.selection.left.list',
  
    requires: [
        'Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanel',
        'Kmbsvle.view.community.single.center.panel.CommunitySingleCenterPanel',
        'Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanel'
    ],

    routes: {
        'community/1': 'openCommunitySingle'
    },

    openCommunitySingle: function() {
        var me = this;
        me.changeLeftPanel('widget.community.single.left.panel', 'community_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.community.single.center.panel');
        me.changeRightPanel('widget.community.single.right.panel', 'community_single_right_panel_title', 'collapse');
        me.redirectTo('community/1');
    }
    
}); 
