Ext.define('Kmbsvle.view.toppanel.userops.ToppanelUseropsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.toppanel.userops',

    data: {

        en: {

        },

        uk: {

        }

    },
    
    links: {
        theUser: {
            type: 'Kmbsvle.model.User',
            fullName: 'fullName',
            create: true
        }
    }

});

