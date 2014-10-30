Ext.define('Kmbsvle.view.content.single.left.panel.ContentSingleLeftPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.content.single.left.panel',
  controller: 'content.single.left.panel',
  viewModel: {
    type: 'content.single.left.panel'
  },
  requires: [
    'Kmbsvle.view.content.single.left.panel.ContentSingleLeftPanelController',
    'Kmbsvle.view.content.single.left.panel.ContentSingleLeftPanelModel'
  ],
  header: false,
  html: 'Properties Zone for a Content sample',
  width: 150,
  bodyPadding: 10,
  collapsed: true
});
