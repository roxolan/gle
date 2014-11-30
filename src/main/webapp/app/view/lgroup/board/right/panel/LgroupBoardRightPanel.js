Ext.define('Kmbsvle.view.lgroup.board.right.panel.LgroupBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.lgroup.board.right.panel',
  controller: 'lgroup.board.right.panel',
  viewModel: {
    type: 'lgroup.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.lgroup.board.right.panel.LgroupBoardRightPanelController',
    'Kmbsvle.view.lgroup.board.right.panel.LgroupBoardRightPanelModel'
  ],
  header: false,
  html: 'Settings for Learning Group Board',
  width: 200,
  bodyPadding: 10
  
});
