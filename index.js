//llamado de las librerias
const express = require('express');
const cors = require('cors');
const tokens = require('./controller/tokens');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('6113995402:AAE37U7PXKJWuMpkB8o7mrrThZ82Ii1lhTA');
//implementacion de express
const app = express();
const chatids = [];

//app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//uso de la rutas

bot.start((ctx)=>{
    ctx.reply("Bienvenido al proyecto planta");
});

bot.launch();
app.use(require('./routes/index.routes'));
//configuracion del puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{console.log(`En el puerto: ${app.get('port')}`)})