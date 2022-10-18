require("dotenv").config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});


module.exports = pool.promise();

// const db_con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "606969",
//     database: "node_express_starter"
// });
// db_con.connect(function(err) {
//     if (!err) {
//         console.log("connected");
//     } else
//         console.log(err.message)
// });