Ext.define('Kmbsvle.view.group.board.left.panel.GroupBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.group.board.left.panel',
  
    requires: [
    'Kmbsvle.view.group.single.left.panel.GroupSingleLeftPanel',
    'Kmbsvle.view.group.single.center.panel.GroupSingleCenterPanel',
    'Kmbsvle.view.group.single.right.panel.GroupSingleRightPanel'
    ],

    routes: {
        'group': 'openGroupSingle'
    },


    openGroupSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.group.single.left.panel', 'group_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.group.single.center.panel');
        me.changeRightPanel('widget.group.single.right.panel', 'group_single_right_panel_title', 'collapse');
        me.redirectTo('group');
    }


}); 
