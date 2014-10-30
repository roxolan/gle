Ext.define('Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.library.board.center.panel',
  requires: [
    'Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanelController',
    'Kmbsvle.view.library.board.center.panel.LibraryBoardCenterPanelModel'    
  ],
  controller: 'library.board.center.panel',
  viewModel: {
    type: 'library.board.center.panel'
  },
  html: 'Library -- Бібліотека: перелік матеріалів',
  bodyPadding: 10

});
