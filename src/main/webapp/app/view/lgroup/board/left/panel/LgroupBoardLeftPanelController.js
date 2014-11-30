Ext.define('Kmbsvle.view.lgroup.board.left.panel.LgroupBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.board.left.panel',
  
    requires: [
    'Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanel',
    'Kmbsvle.view.lgroup.single.center.panel.LgroupSingleCenterPanel',
    'Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanel'
    ],

    routes: {
        'lgroup': 'openLgroupSingle'
    },


    openLgroupSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.lgroup.single.left.panel', 'lgroup_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.lgroup.single.center.panel');
        me.changeRightPanel('widget.lgroup.single.right.panel', 'lgroup_single_right_panel_title', 'collapse');
        me.redirectTo('lgroup');
    }


}); 
