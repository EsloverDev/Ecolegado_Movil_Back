const express = require('express');
const respuesta = require('../src/util/response');
const service = require('../src/modulos/persona/personaService');

const router = express.Router();

router.post('/user/login', (req, res) => {
    const Usuario = req.body.correo;
    const Clave = req.body.clave;
    service.login(Usuario, Clave).then(result => {
        if(result.length > 0){
            respuesta.success(req, res, 200, result);
        } else {
            respuesta.error(req, res, 401, 'Usuario o clave incorrectos');
        }
    })
})

router.post('/user/register', (req, res) => {
    console.log(req.body)
    const Nombre = req.body.nombres;
    const Apellido = req.body.apellidos;
    const Correo = req.body.correo;
    const Contrasena = req.body.clave;
    const ConfirmarCont = req.body.confClave;
    const postRegister = service.register(Nombre, Apellido, Correo, Contrasena, ConfirmarCont).then((items) => {
        respuesta.success(req, res, 200, items)
    })
})

router.get('user/list', (req, res) => {
    const getAllUsers = service.listAll().then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const getUser = service.listOne(id).then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

module.exports = router;