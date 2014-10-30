Ext.define('Kmbsvle.view.group.single.left.panel.menu.GroupSingleLeftPanelMenu', {
  extend: 'Ext.menu.Menu',

  alias: 'widget.group.single.left.panel.menu',

  controller: 'group.single.left.panel.menu',
  viewModel: {
    type: 'group.single.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.group.single.left.panel.menu.GroupSingleLeftPanelMenuController'        
  ],

  width: 250,
  floating: false,
  items: [
    { 
      xtype: 'menuitem',
      reference: 'group_single_announcements',
      text: 'Оголошення'
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'group_single_discussions',
      text: 'Обговорення' 
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'group_single_content',
      text: 'Матеріали' 
    },
    { 
      xtype: 'menuseparator' 
    },
    {
      xtype: 'menuitem',
      reference: 'group_single_event_single',
      text: 'Окрема подія',
      listeners: {
        click: 'openEventSingle'
      }
    }
  ]
});
