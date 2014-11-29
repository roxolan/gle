Ext.define('Kmbsvle.view.dashboard.right.panel.DashboardRightPanelController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.dashboard.right.panel',

  onPanelShow: function() {
    var rhld = Ext.getCmp('rightholder');
    var userSelectedLocale = 'uk';

    if (userSelectedLocale === 'en') {
      var rightTitle = this.getViewModel().getData().en.dashboard_right_panel_title;
    } else if (userSelectedLocale === 'uk') {
      var rightTitle = this.getViewModel().getData().uk.dashboard_right_panel_title;
    }

    rhld.setTitle(rightTitle);
  },


  control: {
    '#': {
      afterrender: 'onPanelShow'
    }
  }


}); 
