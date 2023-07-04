var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'shop',
})
module.exports = connection

// var mysql = require('mysql');

// var connection = mysql.createPool({
// 	connectionLimit: 10,
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'shop',
// })
// module.exports = connection


// const mysql = require('mysql')

// const db = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'my_db_01',
// })
// module.exports = db