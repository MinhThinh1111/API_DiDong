const mysql = require('mysql');

var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'api_chuyendedidong',
});

connect.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connect success");
    }
})

module.exports = connect;
