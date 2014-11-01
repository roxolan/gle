/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */


Ext.define('Kmbsvle.view.main.MainView', {
  extend: 'Ext.container.Container',
  
  xtype: 'mainview',
  
  controller: 'mainview',
  viewModel: {
    type: 'mainview'
  },
  
  layout: {
    type: 'border'
  },
  
  items: [
    {
      region: 'north',
      xtype: 'toppanel'
    },
    {
      region: 'west',
      xtype: 'panel',
      id: 'leftholder',
      split: true,
      collapsible: true,
      items: [
        {
          xtype: 'dashboard.left.panel'
        }
      ]

    },
    {
      region: 'center',
      xtype: 'panel',
      id: 'centerholder',
      items: [
        {
          xtype: 'dashboard.center.panel'
        }
      ]
    },
    {
      region: 'east',
      xtype: 'panel',
      id: 'rightholder',
//      bind: {
//        title: '{initialRightTitle}'
//      },
      split: true,
      collapsible: true,
      collapsed: true,
      items: [
        {
          xtype: 'dashboard.right.panel'
        }
      ]
    }
  ]
  
});
