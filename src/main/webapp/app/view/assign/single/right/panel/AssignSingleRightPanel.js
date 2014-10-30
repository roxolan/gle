Ext.define('Kmbsvle.view.assign.single.right.panel.AssignSingleRightPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.assign.single.right.panel',
  controller: 'assign.single.right.panel',
  viewModel: {
    type: 'assign.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.assign.single.right.panel.AssignSingleRightPanelController',
    'Kmbsvle.view.assign.single.right.panel.AssignSingleRightPanelModel'
  ],
  width: 400,
  bodyPadding: 10,
  items:[{
    xtype: 'tab',
    closable: false,
    title: 'Файли',
    html: '<h3>Файли для виконання завдання</h3>'
  },{
    xtype: 'tab',
    title: 'Чернетки',
    closable: false,
    html: '<h3>Робочі версії відповіді учасника - в процесі</h3>'
  },{
    xtype: 'tab',
    closable: false,
    title: 'Завантаження',
    html: '<h3>Форма для завантаження відповіді в систему через окремий файл або текст</h3>'
  },{
    xtype: 'tab',
    closable: false,
    title: 'Обговорення',
    html: '<h3>Коментарі на рішення від викладача і діалог зі студентом</h3>'
  }]
  
});
