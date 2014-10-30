Ext.define('Kmbsvle.view.assign.board.right.panel.AssignBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.assign.board.right.panel',
  controller: 'assign.board.right.panel',
  viewModel: {
    type: 'assign.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.assign.board.right.panel.AssignBoardRightPanelController',
    'Kmbsvle.view.assign.board.right.panel.AssignBoardRightPanelModel'
  ],
  header: false,
  html: 'Налаштування завдань',
  width: 200,
  bodyPadding: 10
  
});
