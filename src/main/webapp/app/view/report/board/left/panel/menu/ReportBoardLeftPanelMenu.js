Ext.define('Kmbsvle.view.report.board.left.panel.menu.ReportBoardLeftPanelMenu', {
  extend: 'Ext.menu.Menu',
  
  alias: 'widget.report.board.left.panel.menu',
  
  controller: 'report.board.left.panel.menu',
  viewModel: {
    type: 'report.board.left.panel.menu'
  },
  requires: [
    'Kmbsvle.view.report.board.left.panel.menu.ReportBoardLeftPanelMenuController'
  ],
  
  width: 250,
  floating: false,

  items: [
    { 
      xtype: 'menuitem',
      reference: 'report_board_user_report_1',
      text: 'Звіт про учасника №1',
      listeners: {
        click: 'openReportSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'report_board_user_report_2',
      text: 'Звіт про учасника №2',
      listeners: {
        click: 'openReportSingle'
      }
    },
    { 
      xtype: 'menuseparator' 
    },
    { 
      xtype: 'menuitem',
      reference: 'report_board_user_report_3',
      text: 'Звіт про учасника №3',
      listeners: {
        click: 'openReportSingle'
      }
    }

  ]

});
