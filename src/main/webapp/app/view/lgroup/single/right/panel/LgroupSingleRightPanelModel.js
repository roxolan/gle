/*
    ==C07
    Список учасників навчальноі групи
    - таблиця з аватарами учасників
    - інформація про учасників (email, ім'я, ...)
    - можливість відправлення повідомлення
    - вікно пошуку учасників
*/

Ext.define('Kmbsvle.view.lgroup.single.right.panel.LgroupSingleRightPanelModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.lgroup.single.right.panel',

    data: {

        en: {
            lgroup_single_right_panel_title: 'Group settings'
        },

        uk: {
            lgroup_single_right_panel_title: 'Налаштування групи'
        }

    }

});
