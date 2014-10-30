Ext.define('Kmbsvle.view.content.single.right.panel.ContentSingleRightPanel', {
  extend: 'Ext.tab.Panel',
  
  alias: 'widget.content.single.right.panel',
  controller: 'content.single.right.panel',
  viewModel: {
    type: 'content.single.right.panel'
  },
  requires: [
    'Kmbsvle.view.content.single.right.panel.ContentSingleRightPanelController',
    'Kmbsvle.view.content.single.right.panel.ContentSingleRightPanelModel'
  ],

  width: 400,
  bodyPadding: 10,
  items:[{
    xtype: 'tab',
    closable: false,
    title: 'Матеріали',
    html: '<h3>Розбивка матеріалів за темами</h3>'
  },{
    xtype: 'tab',
    title: 'Завдання',
    closable: false,
    html: '<h3>Список завдань: до яких відноситься цей матеріал, і лінки на всі завдання курсу</h3>'
  },{
    xtype: 'tab',
    closable: false,
    title: 'Нотатки',
    html: '<h3>Персональні записи в контексті матеріалу</h3>'
  },{
    xtype: 'tab',
    closable: false,
    title: 'Обговорення',
    html: '<h3>Коментарі на матеріал</h3><br /><p>Доступні всім авторизованим читачам (з групи) - пізніше можна авторизувати розшарювання між групами</p>'
  }]
  
});
