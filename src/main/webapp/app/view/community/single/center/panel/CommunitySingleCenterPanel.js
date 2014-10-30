Ext.define('Kmbsvle.view.community.single.center.panel.CommunitySingleCenterPanel', {
  extend: 'Ext.panel.Panel',
  
  alias: 'widget.community.single.center.panel',
  controller: 'community.single.center.panel',
  viewModel: {
    type: 'community.single.center.panel'
  },
  requires: [
    'Kmbsvle.view.community.single.center.panel.CommunitySingleCenterPanelController',
    'Kmbsvle.view.community.single.center.panel.CommunitySingleCenterPanelModel'
  ],
  
  html: 'A Particular Community -- Спільнота за інтересом',
  bodyPadding: 10
  
});
