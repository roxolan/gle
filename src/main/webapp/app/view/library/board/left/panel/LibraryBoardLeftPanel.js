Ext.define('Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.library.board.left.panel',
  requires: [
    'Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanelController',
    'Kmbsvle.view.library.board.left.panel.LibraryBoardLeftPanelModel'
  ],
  controller: 'library.board.left.panel',
  viewModel: {
    type: 'library.board.left.panel'
  },

  header: false,
  html: 'Menu for Library Board',
  width: 250,
  bodyPadding: 10
});
