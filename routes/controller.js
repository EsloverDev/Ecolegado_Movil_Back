const express = require('express');
const respuesta = require('../src/util/response');
const service = require('../src/modulos/persona/personaService');

const router = express.Router();

router.post('/user/login', (req, res) => {
    respuesta.success(req, res, 200, 'Bienvenido');
})

router.post('/user/register', (req, res) => {
    respuesta.success(req, res, 200, 'Usuario creado');
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