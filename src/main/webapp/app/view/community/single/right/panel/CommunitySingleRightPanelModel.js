/*
    ==C09
    Соціальна група (community)
    - аватар
    - назва
    - опис
    - кількість учасників
    - стрічка (stream)
    - налаштування групи
 */

/*
    ==C10
    Форма створення / редагування соціальної групи (community) + CRUD
    - аватар (CRUD)
    - назва
    - опис
    - налаштування підписок (управління учасниками)
    - запрошення до групи
 */

Ext.define('Kmbsvle.view.community.single.right.panel.CommunitySingleRightPanelModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.community.single.right.panel',

    data: {

        en: {
          community_single_right_panel_title: 'Community Settings'
        },

        uk: {
          community_single_right_panel_title: 'Налаштування сп. за інтересом'
        }

    }

});
