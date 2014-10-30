Ext.define('Kmbsvle.view.dashboard.left.panel.DashboardLeftPanelController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.dashboard.left.panel',

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
