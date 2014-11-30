Ext.define('Kmbsvle.view.lgroup.single.left.panel.LgroupSingleLeftPanelController', {
    extend: 'Kmbsvle.view.base.BaseViewController',

    alias: 'controller.lgroup.single.left.panel',
  
    requires: [
        'Kmbsvle.view.event.single.left.panel.EventSingleLeftPanel',
        'Kmbsvle.view.event.single.center.panel.EventSingleCenterPanel',
        'Kmbsvle.view.event.single.right.panel.EventSingleRightPanel'
    ],


    openEventSingle: function() {
        var me = this;
        me.changeLeftPanel('widget.event.single.left.panel', 'event_single_left_panel_title', 'expand');
        me.changeCenterPanel('widget.event.single.center.panel');
        me.changeRightPanel('widget.event.single.right.panel', 'event_single_right_panel_title', 'collapse');
        me.redirectTo('event');   
    }


}); 
