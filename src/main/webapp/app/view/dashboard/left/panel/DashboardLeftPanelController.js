Ext.define('Kmbsvle.view.dashboard.left.panel.DashboardLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.dashboard.left.panel',
  
    requires: [
        'Kmbsvle.view.message.board.left.panel.MessageBoardLeftPanel',
        'Kmbsvle.view.message.board.center.panel.MessageBoardCenterPanel',
        'Kmbsvle.view.message.board.right.panel.MessageBoardRightPanel'
    ],

    routes: {
        'messages' : 'openMessageBoard'
    },

    openMessageBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.message.board.left.panel', 'message_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.message.board.center.panel');
        me.changeRightPanel('widget.message.board.right.panel', 'message_board_right_panel_title', 'collapse');
        me.redirectTo('messages');
    },

    onPanelShow: function() {
        var lhld = Ext.getCmp('leftholder');
        var userSelectedLocale = 'uk';

        if (userSelectedLocale === 'en') {
            var leftTitle = this.getViewModel().getData().en.dashboard_left_panel_title;
        } else if (userSelectedLocale === 'uk') {
            var leftTitle = this.getViewModel().getData().uk.dashboard_left_panel_title;
        }

        lhld.setConfig('title', leftTitle);
    },


    control: {
        '#': {
            afterrender: 'onPanelShow'
        }
    }
}); 
