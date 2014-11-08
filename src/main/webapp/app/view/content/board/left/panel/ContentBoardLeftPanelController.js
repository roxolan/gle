Ext.define('Kmbsvle.view.content.board.left.panel.ContentBoardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.content.board.left.panel',
  
    requires: [
        'Kmbsvle.view.content.single.left.panel.ContentSingleLeftPanel',
        'Kmbsvle.view.content.single.center.panel.ContentSingleCenterPanel',
        'Kmbsvle.view.content.single.right.panel.ContentSingleRightPanel'
    ],

    routes: {
        'content/1': 'openContentSingle'
    },


    openContentSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.content.single.left.panel', 'content_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.content.single.center.panel', 'content_single_center_panel_title');
        me.changeRightPanel('widget.content.single.right.panel', 'content_single_right_panel_title', 'collapse');
        me.redirectTo('content/1');
    }


}); 
