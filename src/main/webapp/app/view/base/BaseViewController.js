Ext.define('Kmbsvle.view.base.BaseViewController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.base.viewcontroller',

  requires: [],

  userSelectedLocale: 'uk',

  changeLeftPanel: function(xtype, title, form){
    var lhld = Ext.getCmp('leftholder');
    var leftPanel = Ext.create(xtype);
    lhld.removeAll();
    lhld.add(leftPanel);
    
    if (typeof title !== 'undefined') {
      var leftPanelTitlePath = Ext.String.format('leftPanel.getViewModel().getData().{0}.{1}', this.userSelectedLocale, title);
      var leftPanelTitle = eval(leftPanelTitlePath);
      lhld.setConfig('title', leftPanelTitle);
    }

    if (typeof form !== 'undefined') {
      if (form === 'collapse') {
        lhld.collapse();
      } else if (form === 'expand') {
        lhld.expand();
      }
    }

  },

  changeCenterPanel: function(xtype, title, form) {
    var chld = Ext.getCmp('centerholder');
    var centerPanel = Ext.create(xtype);
    chld.removeAll();
    chld.add(centerPanel);

    if (typeof title !== 'undefined') {
      var centerPanelTitlePath = Ext.String.format('centerPanel.getViewModel().getData().{0}.{1}', this.userSelectedLocale, title);
      var centerPanelTitle = eval(centerPanelTitlePath);
      chld.setConfig('title', centerPanelTitle);
    }

  },

  changeRightPanel: function(xtype, title, form) {
    var rhld = Ext.getCmp('rightholder');
    var rightPanel = Ext.create(xtype);
    rhld.removeAll();
    rhld.add(rightPanel);

    if (typeof title !== 'undefined') {
      var rightPanelTitlePath = Ext.String.format('rightPanel.getViewModel().getData().{0}.{1}', this.userSelectedLocale, title);
      var rightPanelTitle = eval(rightPanelTitlePath);
      rhld.setConfig('title', rightPanelTitle);
    }

    if (typeof form !== 'undefined') {
      if (form === 'collapse') {
        rhld.collapse();
      } else if (form === 'expand') {
        rhld.expand();
      }
    }

  }


});
           
