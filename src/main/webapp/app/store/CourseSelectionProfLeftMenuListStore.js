Ext.define('Kmbsvle.store.CourseSelectionProfLeftMenuListStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            {text: "Філософія менеджменту", leaf: true},
            {text: "Корпоративна соціальна відповідальність та етика бізнесу", leaf: true}
        ]
    }
});
