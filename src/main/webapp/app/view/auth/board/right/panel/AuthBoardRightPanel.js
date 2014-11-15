Ext.define('Kmbsvle.view.auth.board.right.panel.AuthBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.auth.board.right.panel',
  requires: [
    'Kmbsvle.view.auth.board.right.panel.AuthBoardRightPanelController',
    'Kmbsvle.view.auth.board.right.panel.AuthBoardRightPanelModel'
  ],
  controller: 'auth.board.right.panel',
  viewModel: {
    type: 'auth.board.right.panel'
  },

  header: false,
  html: 'Dummy Initial Panel',
  width: 200,
  bodyPadding: 10
  
});
