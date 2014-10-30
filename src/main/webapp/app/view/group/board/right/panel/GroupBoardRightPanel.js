Ext.define('Kmbsvle.view.group.board.right.panel.GroupBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.group.board.right.panel',
  controller: 'group.board.right.panel',
  viewModel: {
    type: 'group.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.group.board.right.panel.GroupBoardRightPanelController',
    'Kmbsvle.view.group.board.right.panel.GroupBoardRightPanelModel'
  ],
  header: false,
  html: 'Settings for Group Board',
  width: 200,
  bodyPadding: 10
  
});
