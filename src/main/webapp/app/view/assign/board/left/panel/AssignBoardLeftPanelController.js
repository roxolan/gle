Ext.define('Kmbsvle.view.assign.board.left.panel.AssignBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.assign.board.left.panel',
  
    requires: [
        'Kmbsvle.view.assign.single.left.panel.AssignSingleLeftPanel',
        'Kmbsvle.view.assign.single.center.panel.AssignSingleCenterPanel',
        'Kmbsvle.view.assign.single.right.panel.AssignSingleRightPanel'
    ],

    routes: {
        'assignment': 'openAssignment'
    },


    openAssignment: function() {
        var me = this;
        me.changeLeftPanel('widget.assign.single.left.panel', 'assign_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.assign.single.center.panel', 'assign_single_center_panel_title');
        me.changeRightPanel('widget.assign.single.right.panel', 'assign_single_right_panel_title', 'collapse');
        me.redirectTo('assignment');
    }


}); 
