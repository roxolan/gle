Ext.define('Kmbsvle.view.community.single.left.panel.menu.CommunitySingleLeftPanelMenu', {
  extend: 'Ext.menu.Menu',

  alias: 'widget.community.single.left.panel.menu',

  controller: 'community.single.left.panel.menu',
  viewModel: {
    type: 'community.single.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.community.single.left.panel.menu.CommunitySingleLeftPanelMenuController'
  ],

  width: 250,
  floating: false,
  items: [
    { 
      xtype: 'menuitem',
      reference: 'community_events',
      text: 'Події спільноти',
      listeners: {
        click: 'openEventsBoard'
      }
    }

  ]
});
