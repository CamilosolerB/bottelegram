//llamado de las librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//implementacion de express
const app = express();

//app.use(morgan('dev'));
app.use(express.json());
//uso de la rutas
app.use(require('./routes/index.routes'));
//configuracion del puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{console.log(`En el puerto: ${app.get('port')}`)})