const {Telegraf} = require('telegraf');
const bot = new Telegraf('6113995402:AAE37U7PXKJWuMpkB8o7mrrThZ82Ii1lhTA');

bot.start((ctx)=>{
    ctx.reply("Bienvenido al proyecto planta");
});

bot.launch();