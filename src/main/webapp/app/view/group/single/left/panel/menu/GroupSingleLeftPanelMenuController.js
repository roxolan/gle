Ext.define('Kmbsvle.view.group.single.left.panel.menu.GroupSingleLeftPanelMenuController', {
  extend: 'Kmbsvle.view.base.BaseViewController',

  alias: 'controller.group.single.left.panel.menu',

  requires: [
    'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanel',
    'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanelController',
    'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanelModel',
    'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanel',
    'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanelController',
    'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanelModel',
    'Kmbsvle.view.event.single.right.panel.EventSingleRightPanel',
    'Kmbsvle.view.event.single.right.panel.EventSingleRightPanelController',
    'Kmbsvle.view.event.single.right.panel.EventSingleRightPanelModel'
  ],

  openEventSingle: function() {
    var userSelectedLocale = 'uk';
    var lhld = Ext.getCmp('leftholder');
    var chld = Ext.getCmp('centerholder');
    var rhld = Ext.getCmp('rightholder');
    var eventSingleLeftPanel = Ext.create('widget.event.single.left.panel');
    var eventSingleCenterPanel = Ext.create('widget.event.single.center.panel');
    var eventSingleRightPanel = Ext.create('widget.event.single.right.panel');        
    
    lhld.removeAll();
    lhld.add(eventSingleLeftPanel);
    
    chld.removeAll();
    chld.add(eventSingleCenterPanel);
    
    rhld.removeAll();
    rhld.add(eventSingleRightPanel);
    
    if (userSelectedLocale === 'en') {
      var leftTitle = eventSingleLeftPanel.getViewModel().getData().en.event_single_left_panel_title;
      var rightTitle = eventSingleRightPanel.getViewModel().getData().en.event_single_right_panel_title;
    } else if (userSelectedLocale === 'uk') {
      var leftTitle = eventSingleLeftPanel.getViewModel().getData().uk.event_single_left_panel_title;
      var rightTitle = eventSingleRightPanel.getViewModel().getData().uk.event_single_right_panel_title;
    }
    
    lhld.setConfig('title', leftTitle);
    rhld.setConfig('title', rightTitle);
    
    this.redirectTo('event');
   
  }


}); 
