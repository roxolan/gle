Ext.define('Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanel', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.report.board.left.panel',
    controller: 'report.board.left.panel',
    viewModel: {
        type: 'report.board.left.panel'
    },
    requires: [
        'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanelController',
        'Kmbsvle.view.report.board.left.panel.ReportBoardLeftPanelModel'
    ],
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
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
                    text: 'Звіт про учасника №3',
                    listeners: {
                        click: 'openReportSingle'
                    }
                }         
            ]
        }
    ]
});
