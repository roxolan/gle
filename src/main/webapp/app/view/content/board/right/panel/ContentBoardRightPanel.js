Ext.define('Kmbsvle.view.content.board.right.panel.ContentBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.content.board.right.panel',
  controller: 'content.board.right.panel',
  viewModel: {
    type: 'content.board.right.panel'
  },
  requires: [
    'Kmbsvle.view.content.board.right.panel.ContentBoardRightPanelController',
    'Kmbsvle.view.content.board.right.panel.ContentBoardRightPanelModel'
  ],
  header: false,
  html: 'Налаштування матеріалів',
  width: 200,
  bodyPadding: 10
  
});
