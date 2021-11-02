const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'julioTrybe',
  password: 'julio123',
  database: 'predialX'
});

module.exports = connection;
