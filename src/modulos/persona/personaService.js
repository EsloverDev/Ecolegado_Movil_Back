const db = require('../../database/dbConfig');

const entidad = 'persona';

function listAll(){
    return db.listAll(entidad);
}

function listOne(id){
    return db.listOne(id);
}

function login(usu, con){
    return db.loginValidator(entidad, usu, con);
}

function register(Nombre, Apellido, Correo, Contrasena, ConfirmarCont){
    console.log(Nombre, Apellido, Correo, Contrasena, ConfirmarCont)
    return db.add(entidad, Nombre, Apellido, Correo, Contrasena, ConfirmarCont);
}

module.exports = {
    listAll,
    listOne,
    login,
    register
}