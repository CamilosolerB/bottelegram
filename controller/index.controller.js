const controller = {};
const tokens = require("./tokens");
const twit = require('twit');
const TelegramBot = require('node-telegram-bot-api');
const token = tokens.tokenTelegram;
const bot = new TelegramBot(token, {polling:true})
const chat_id = tokens.chat_id;
//encendido del bot
bot.on('polling_error', (error)=>{
    console.log(error)
})

controller.SayHello = async (req,res) =>{
    const {message} = req.body;
    bot.sendMessage(chat_id,message);
    res.json({message: "Mensaje enviado correctamente"});
    //res.redirect(307,'/twit');
}
controller.runUp = (req,res)=>{
    res.send("El servidor esta arrancando correctamente");
}
controller.sendTwitter = (req,res) =>{
    const {message} = req.body;
    console.log(message);
    tokens.Twitter.post('statuses/update',{ status: message}, (err, data, response) =>{
        console.log(data);
    });
    res.json({message : "Mensaje enviado por telegram y twitter"});
}

module.exports = controller;