Ext.define('Kmbsvle.view.manage.board.center.panel.ManageBoardCenterPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.manage.board.center.panel',
  
  controller: 'manage.board.center.panel',
  viewModel: {
    type: 'manage.board.center.panel'
  },
  requires: [
    'Kmbsvle.view.manage.board.center.panel.ManageBoardCenterPanelController',
    'Kmbsvle.view.manage.board.center.panel.ManageBoardCenterPanelModel'
  ],
  autoScroll: true,
  bodyPadding: 10,
  items:[
    {
      title: 'Навчання',
      html: '<h2>First tab content</h2>'
    },
    {
      title: 'Спільнота',
      html: '<h3>A bit smaller heading, #3</h3>'
    }]
});
