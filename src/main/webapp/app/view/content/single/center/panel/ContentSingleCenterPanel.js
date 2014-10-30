Ext.define('Kmbsvle.view.content.single.center.panel.ContentSingleCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.content.single.center.panel',
  controller: 'content.single.center.panel',
  viewModel: {
    type: 'content.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.content.single.center.panel.ContentSingleCenterPanelController',
    'Kmbsvle.view.content.single.center.panel.ContentSingleCenterPanelModel'
  ],
  
  html: 'Content Sample -- Матеріал',
  bodyPadding: 10

});
