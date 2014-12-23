Ext.define('Kmbsvle.store.CourseModules', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            {text: "Модуль 1. Глобальна фінансова система та фінансове посередництво", leaf: true},
            {text: "Модуль 2. Вартість грошей у часі", leaf: true}
        ]
    }
});
