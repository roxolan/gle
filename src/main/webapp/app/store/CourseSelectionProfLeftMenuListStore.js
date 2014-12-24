Ext.define('Kmbsvle.store.CourseSelectionProfLeftMenuListStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            {text: "Філософія менеджменту", leaf: true},
            {
                text: '<div style="white-space:normal !important;">Корпоративна соціальна відповідальність та етика бізнесу</div>',
                leaf: true
                // renderer: function(value) { return '<div style="white-space:normal !important;">' + value + '</div>';}
            }
        ]
    }
});
