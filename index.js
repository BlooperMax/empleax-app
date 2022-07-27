const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


// Crear servidor de express

const app = express();

dbConnection();

// directorio publico

app.use( express.static('public'));
app.use( express.json() );
app.use(cors());

// api

app.use('/api/' , require('./routes/nuevoUsuario'));

app.listen( process.env.PORT, () => {
    console.log(`Corriendo en el puerto ${process.env.PORT}`)
});