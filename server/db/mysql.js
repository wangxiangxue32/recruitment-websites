const mysql = require("mysql");
const {MYSQL_CONFIG} = require("../config/db");
//创建连接对象
const con = mysql.createConnection(MYSQL_CONFIG);
//开始连接
con.connect();
//同意执行sql的函数
function exec(sql) {
    return new Promise(((resolve, reject) => {
        con.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    }));
}

module.exports = {
    exec,
    escape:mysql.escape
};