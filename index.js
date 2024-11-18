const express = require('express');
const cors = require('cors')
const controller = require('./routes/controller');
const config = require('./src/config');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/', controller);

app.listen(config.port, () => {
    console.log(`Servicio escuchando por el puerto ${config.port}`);
})