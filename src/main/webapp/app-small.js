Ext.define("UserModel", {
    extend: "Ext.data.Model",
    fields: [
        { name: 'id', type: 'int' },
        { name: 'username', type: 'string' },
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' }
    ],

    validators: [
      { type: 'length', field: 'username', min: 5 }
    ],

    proxy: {
      type: 'rest',
      url: 'http://localhost:4001/api/user',
      reader: {
          type: 'json'
      }
    }

});

//var vpav = Ext.create("UserModel", {
//    username: 'vpavelko',
//    firstname: 'Volodymyr',
//    lastname: 'Pavelko'
//});


//vpav.save();

var user = new UserModel();

/*
user.load({
    scope: this,
    failure: function(user){
        console.log("Some error happened");
    },
    success: function(user){
        console.log(this.getData());
    }
});
*/

//user.destroy();
