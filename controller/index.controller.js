const controller = {};
const tokens = require("./tokens");
const twit = require('twit');
const TelegramBot = require('node-telegram-bot-api');
const token = tokens.tokenTelegram;
const bot = new TelegramBot(token, {polling:true})
const chatId = [];
const axios = require('axios');
//encendido del bot
bot.on('polling_error', (error)=>{
    console.log(error)
})
bot.onText(/\start/, (msg)=>{
    const chat_id = msg.chat_id;
    const message = "Bienvenido al proyecto de plantita feliz, en cuanto el esp este activado podras empezar a recibir las alertas de nuestra plantita, estate atento :D";
    chatId.push(chat_id);
    bot.sendMessage(chat_id,message);
});
controller.botHazAlgo = (req, res) => {
    bot.processUpdate(req.body);
}
controller.SayHello = async (req,res) =>{
    const {message} = req.body;
    for(let id = 0; id < chatId.length; j++){
        bot.sendMessage(chatId[id],message);
    }
    res.json({message: "Mensaje enviado correctamente"});
    //res.redirect(307,'/twit');
}
controller.runUp = (req,res)=>{
    res.send("El servidor esta arrancando correctamente");
}
controller.sendTwitter = (req,res) =>{
    const {message} = req.body;
    console.log(req.body);
    console.log(message);
    tokens.Twitter.post('statuses/update',{ status: message}, (err, data, response) =>{
        console.log(data);
    });
    res.json({message : "Mensaje enviado por telegram y twitter"});
}
controller.webHook = (req,res) =>{
    const {message} = req.body;
    if(message.text === '/start'){
        const chat_id = message.chat.id;
        chatId.push(chat_id);
        console.log(chat_id+" almacendo");
        axios.post(`https://api.telegram.org/bot${tokens.tokenTelegram}/sendMessage`,{
            chat_id: chat_id,
            text: "Bienvenido al proyecto de plantita feliz, en cuanto el esp este activado podras empezar a recibir las alertas de nuestra plantita, estate atento :D"
        })
        .then(response => {console.log("Mensaje enviado con exito") })
        .catch(error => { console.log("Error al enviar mensaje "+error)})
    }
    res.sendStatus(200);   
}

module.exports = controller;
