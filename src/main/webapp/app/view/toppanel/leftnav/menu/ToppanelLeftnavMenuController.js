Ext.define('Kmbsvle.view.toppanel.leftnav.menu.ToppanelLeftnavMenuController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.toppanel.leftnav.menu',

    requires: [
        'Kmbsvle.view.calendar.board.left.panel.CalendarBoardLeftPanel',
        'Kmbsvle.view.calendar.board.center.panel.CalendarBoardCenterPanel',
        'Kmbsvle.view.calendar.board.right.panel.CalendarBoardRightPanel',
    
        'Kmbsvle.view.learn.board.left.panel.LearnBoardLeftPanel',
        'Kmbsvle.view.learn.board.center.panel.LearnBoardCenterPanel',
        'Kmbsvle.view.learn.board.right.panel.LearnBoardRightPanel',
    
        'Kmbsvle.view.social.board.left.panel.SocialBoardLeftPanel',
        'Kmbsvle.view.social.board.center.panel.SocialBoardCenterPanel',    
        'Kmbsvle.view.social.board.right.panel.SocialBoardRightPanel'
    ],

    routes: {
        'calendar' : 'openCalendarBoard',
        'learn' : 'openLearnBoard',
        'social' : 'openSocialBoard'
    },

    setLeftnavCaptions: function() {
        var userSelectedLocale = 'uk';

        var learnItem = this.lookupReference('leftnav_learn');
        var socialItem = this.lookupReference('leftnav_social');
        var calendarItem = this.lookupReference('leftnav_calendar');

        console.log(this.getViewModel().getData());

        if (userSelectedLocale === 'en') {
            var learnCaption = this.getViewModel().getData().en.toppanel_leftnav_learn_caption;
            var socialCaption = this.getViewModel().getData().en.toppanel_leftnav_social_caption;
            var calendarCaption = this.getViewModel().getData().en.toppanel_leftnav_calendar_caption;
        } else if (userSelectedLocale === 'uk') {
            var learnCaption = this.getViewModel().getData().uk.toppanel_leftnav_learn_caption;
            var socialCaption = this.getViewModel().getData().uk.toppanel_leftnav_social_caption;
            var calendarCaption = this.getViewModel().getData().uk.toppanel_leftnav_calendar_caption;
        }

        learnItem.setConfig('text', learnCaption);
        socialItem.setConfig('text', socialCaption);
        calendarItem.setConfig('text', calendarCaption);
    },

    openLearnBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.learn.board.left.panel', 'learn_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.learn.board.center.panel', 'learn_board_center_panel_title');
        me.changeRightPanel('widget.learn.board.right.panel', 'learn_board_right_panel_title', 'collapse');
        me.redirectTo('learn/board');
    },
  
    openSocialBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.social.board.left.panel', 'social_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.social.board.center.panel', 'social_board_center_panel_title');
        me.changeRightPanel('widget.social.board.right.panel', 'social_board_right_panel_title', 'collapse');
        me.redirectTo('social/board');
    },
  
  
    openCalendarBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.calendar.board.left.panel', 'calendar_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.calendar.board.center.panel', 'calendar_board_center_panel_title');
        me.changeRightPanel('widget.calendar.board.right.panel', 'calendar_board_right_panel_title', 'collapse');
        me.redirectTo('calendar');
    },

    control: {
        '#': {
            afterrender: 'setLeftnavCaptions'
        }
    }

}); 
