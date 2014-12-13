Ext.define('Kmbsvle.view.professor.board.manage.left.menu.ProfessorBoardManageLeftMenu', {
    extend: 'Ext.panel.Panel',
  
    alias: 'widget.professor.board.manage.left.menu',
    controller: 'professor.board.manage.left.menu',
    viewModel: {
        type: 'professor.board.manage.left.menu'
    },
    requires: [
        'Kmbsvle.view.professor.board.manage.left.menu.ProfessorBoardManageLeftMenuController',
        'Kmbsvle.view.professor.board.manage.left.menu.ProfessorBoardManageLeftMenuModel'
    ],
    itemId: 'professorBoardManageLeftMenu',
    header: false,
    width: 250,
    items: [
        {
            xtype: 'menu',
            floating: false,
            items: [
                { 
                    xtype: 'menuitem',
                    glyph: 'xf03a@FontAwesome',
                    text: 'Загальний список викладачів',
                    listeners: {
                        click: 'openProfBoard'
                    }
                },
                { 
                    xtype: 'menuseparator' 
                },
                { 
                    xtype: 'menuitem',
                    glyph: 'xf055@FontAwesome',
                    text: 'Додати викладача',
                    listeners: {
                        click: 'addProfessor'
                    }
                }
            ]
        }
    ]       
});
