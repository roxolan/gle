Ext.define('Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.library.board.right.panel',
  requires: [
    'Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanelController',
    'Kmbsvle.view.library.board.right.panel.LibraryBoardRightPanelModel'
  ],
  controller: 'library.board.right.panel',
  viewModel: {
    type: 'library.board.right.panel'
  },

  header: false,
  html: 'Properties Zone for the Library Board',
  width: 200,
  bodyPadding: 10
  
});
