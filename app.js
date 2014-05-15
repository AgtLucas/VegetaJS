var Bookshelf = require('bookshelf');

// Conect to MySQL
var MySqlConnection = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root', // User
    password: 'root', // Password
    database: 'Sayan',
    charset: 'UTF8_GENERAL_CI'
  }
});

var User = MySqlConnection.Model.extend({
  tableName: 'users',

  initialize: function () {
    name: 'Vegeta'
  },

});

var test = new User;
test.save();

console.log('Kakarotto!');