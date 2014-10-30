/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Kmbsvle.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {

        selectedLocale: 'uk',

        en: {
            initial_left_title: 'Initial Dashboard',
            initial_right_title: 'Notifications'
        },

        uk: {
            initial_left_title: 'Робоче місце',
            initial_right_title: 'Оновлення'
        }

    },

    formulas: {

        initialLeftTitle: function(get) {
            var vr = get('en.initial_left_title'), vrua = get('uk.initial_left_title');
            if (get('selectedLocale') === 'uk') {
                return vrua;
            } else {
                return vr;
            }
        },

        initialRightTitle: function(get) {
            var vr = get('en.initial_right_title'), vrua = get('uk.initial_right_title');
            if (get('selectedLocale') === 'uk') {
                return vrua;
            } else {
                return vr;
            }
        }

    },

    stores: {

    

    }

});
