const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rr9550268!',
    database: 'guessthenumber'
});

module.exports = connection;