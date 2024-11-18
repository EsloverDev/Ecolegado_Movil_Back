const db = require('../../database/dbConfig');

const entidad = 'persona';

function listAll(){
    return db.listAll(entidad);
}

function listOne(id){
    return db.listOne(entidad, id);
}

module.exports = {
    listAll,
    listOne
}