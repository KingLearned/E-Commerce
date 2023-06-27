const SQL = require('mysql')
 
const MYSQL = SQL.createConnection({
    host: "Localhost" || "db4free.net",
    user: "root" || "learnedsconcept",
    password: "Learned 1945" || "m94jC6bS3Xp!2LR",
    database: 'lxpurchase'
})

// const MYSQL = SQL.createConnection({
//     host: "Localhost",
//     user: "root",
//     password: 'Learned 1945',
//     database: 'lxpurchase'
// })

MYSQL.connect((err, result) => {
    if(err, result){
        console.log('Data Base Initiated!')
    }else{
        console.log('Data Base Not Found!\nSTART Apache & MySQL from Xampp API')
    }
})

module.exports = MYSQL