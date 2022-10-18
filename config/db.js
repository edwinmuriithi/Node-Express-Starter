const mysql = require('mysql');
const db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "606969",
    database: "node_express_starter"
});
db_con.connect(function(err) {
    if (!err) {
        console.log("connected");
    } else
        console.log(err.message)
});