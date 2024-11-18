const mysql = require('mysql');
const config = require('../config');

const dbParameters = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;
let reconnect = 0;
let maxRec = 3;

function dbConnection(){
    connection = mysql.createConnection(dbParameters);
    connection.connect((error) => {
        if(error){
            reconnect ++;
            console.log(`Error de conexión a la BD: ${error}`);
            if(reconnect >= maxRec){
                process.exit(1);
            }
            setTimeout(dbConnection, 200);
        }
        else{
            console.log('Conexión exitosa a la BD.');
        }
    });
}

dbConnection();

function listAll(entidad){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad}`, (error, result) => {
            if(error){
                return reject(error);
            }
            return resolve(result);
        })
    });
}

function listOne(entidad, id){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad} WHERE id = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            return resolve(result)
        })
    });
}

module.exports = {
    listAll,
    listOne
}