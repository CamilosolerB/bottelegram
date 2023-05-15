//llamado de las librerias
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const tokens = require('./controller/tokens');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(tokens.tokenTelegram, {polling:true})
//implementacion de express
const app = express();
const chatids = [];

//app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//uso de la rutas
app.post('/message',(req,res)=>{
    const chat_id = req.body.message.chat.id;
    console.log("Chat ID: " + chat_id);
    res.sendStatus(200);
})
app.use(require('./routes/index.routes'));
//configuracion del puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{console.log(`En el puerto: ${app.get('port')}`)})