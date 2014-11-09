Ext.define('Kmbsvle.view.toppanel.leftnav.ToppanelLeftnavController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.toppanel.leftnav',

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
        // TODO refactor setLeftnavCaptions method
        var me = this;
        var userSelectedLocale = 'uk';

        var learnItem = me.lookupReference('leftnav_learn');
        var socialItem = me.lookupReference('leftnav_social');
        var calendarItem = me.lookupReference('leftnav_calendar');

        console.log(this.getViewModel().getData());

        if (userSelectedLocale === 'en') {
            var learnCaption = me.getViewModel().getData().en.toppanel_leftnav_learn_caption;
            var socialCaption = me.getViewModel().getData().en.toppanel_leftnav_social_caption;
            var calendarCaption = me.getViewModel().getData().en.toppanel_leftnav_calendar_caption;
        } else if (userSelectedLocale === 'uk') {
            var learnCaption = me.getViewModel().getData().uk.toppanel_leftnav_learn_caption;
            var socialCaption = me.getViewModel().getData().uk.toppanel_leftnav_social_caption;
            var calendarCaption = me.getViewModel().getData().uk.toppanel_leftnav_calendar_caption;
        }

        learnItem.setConfig('text', learnCaption);
        socialItem.setConfig('text', socialCaption);
        calendarItem.setConfig('text', calendarCaption);
    },

    openLearnBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.learn.board.left.panel', 'learn_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.learn.board.center.panel');
        me.changeRightPanel('widget.learn.board.right.panel', 'learn_board_right_panel_title', 'collapse');
        me.redirectTo('learn/board');
    },
  
    openSocialBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.social.board.left.panel', 'social_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.social.board.center.panel');
        me.changeRightPanel('widget.social.board.right.panel', 'social_board_right_panel_title', 'collapse');
        me.redirectTo('social/board');
    },
  
  
    openCalendarBoard: function() {
        var me = this;
        me.changeLeftPanel('widget.calendar.board.left.panel', 'calendar_board_left_panel_title', 'expand');
        me.changeCenterPanel('widget.calendar.board.center.panel');
        me.changeRightPanel('widget.calendar.board.right.panel', 'calendar_board_right_panel_title', 'collapse');
        me.redirectTo('calendar');
    },

    control: {
        '#': {
            afterrender: 'setLeftnavCaptions'
        }
    }

});


