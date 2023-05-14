//llamado de las librerias
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const tokens = require('./controller/tokens')
const serverUrl = "https://telegrambotplant.herokuapp.com/webhook";
const telegramUrl = `https://api.telegram.org/bot${tokens.tokenTelegram}/setWebhook?url=${serverUrl}`;
//implementacion de express
const app = express();

//app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//webhook
axios.get(telegramUrl)
    .then(res => {
        console.log("WebHook configurado con exito");
    })
    .catch(error => {
        console.log("Falla al conectar al webhook "+ error);
    })

//uso de la rutas
app.use(require('./routes/index.routes'));
//configuracion del puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{console.log(`En el puerto: ${app.get('port')}`)})