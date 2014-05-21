// Not working yet
var Bookshelf = require('bookshelf');

// Conect to MySQL
var MySqlConnection = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'Sayan',
    charset: 'UTF8_GENERAL_CI'
  }
});

MySqlConnection.knex.schema.createTable('users', function (user) {
  user.string('name')
}).then(function () {
  var Sayan = MySqlConnection.Model.extend({
    tableName: 'users'
  });

  Sayan.forge({
      name: 'Vegeta'
    }).save().then(function () {
      console.log('Kakarotto!');
  });
});