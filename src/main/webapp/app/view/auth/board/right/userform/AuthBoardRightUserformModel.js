/* 
    ==C03
    Профайл
    - фото
    - ім'я
    - група
    - компанія
    - посада (роль)
    - сфера (галузь)
    - місто
    - День народження
    - email
    - mobile 
    - phone
    - повідомлення
    - можливість додати / видалити з друзів (підписка)
    - Соціальні контакти / профайли (facebook, twitter)
    - До яких груп в mykmbs підписаний   
    
    TODO maybe refactor 'auth.board' --> 'user.board.admin'
 */

/* 
    ==C04
    CRUD Профайл
    - фото (завантажити, CRUD)
    - фінансові показники (для фінансового менеджера)?
    - форми додавання соціальних контактів
    - форми додавання груп з mykmbs
 */



Ext.define('Kmbsvle.view.auth.board.right.userform.AuthBoardRightUserformModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.auth.board.right.userform'

});
