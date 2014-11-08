Ext.define('Kmbsvle.view.community.single.left.panel.CommunitySingleLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.community.single.left.panel',

    requires: [
        'Kmbsvle.view.event.board.left.panel.EventBoardLeftPanel',
        'Kmbsvle.view.event.board.center.panel.EventBoardCenterPanel',
        'Kmbsvle.view.event.board.right.panel.EventBoardRightPanel'
    ],

    routes: {
        'community/events' : 'openEventsBoard'
    },

    openEventsBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.event.board.left.panel', 'event_board_left_panel_title', 'collapse');
        me.changeCenterPanel('widget.event.board.center.panel', 'event_board_center_panel_title');
        me.changeRightPanel('widget.event.board.right.panel', 'event_board_right_panel_title', 'expand');
        me.redirectTo('community/events');
    }


}); 
