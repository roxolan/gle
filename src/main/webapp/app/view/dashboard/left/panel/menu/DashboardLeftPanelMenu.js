Ext.define('Kmbsvle.view.dashboard.left.panel.menu.DashboardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.dashboard.left.panel.menu',
  requires: [
      'Kmbsvle.view.dashboard.left.panel.menu.DashboardLeftPanelMenuController'
  ],
  controller: 'dashboard.left.panel.menu',
  viewModel: {
    type: 'dashboard.left.panel.menu'
  },
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'dashboard_manage_board',
      text: 'Місце менеджера',
      listeners: {
        click: 'openManageBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'dashboard_admin_board',
      text: 'Місце адміністратора',
      listeners: {
        click: 'openAdminBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'dashboard_report_board',
      text: 'Звіти',
      listeners: {
        click: 'openReportBoard'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'dashboard_message_board',
      text: 'Повідомлення',
      listeners: {
        click: 'openMessageBoard'
      }
    }

  ]

});
