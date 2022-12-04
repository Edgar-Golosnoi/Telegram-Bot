/* eslint-disable no-undef */
const { Telegraf } = require('telegraf');
const axios = require('axios');


const bot = new Telegraf('5930144928:AAGZgzG7VlnGeSqIRWrnMMfUeINx1aGm1cE');
bot.start((ctx) => ctx.reply('Привет друг, я расскажу тебе о погоде, скинь свою геолокацию...'));
bot.on('message', async (ctx) => {
    if (ctx.message.location) {
    console.log(ctx.message.location);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=8ddfbcf8a3d045597a2848e80d7c0053`
    const response = await axios.get(url);
    console.log(response);
    ctx.reply(`${response.data.name},
    Температура: ${response.data.main.temp}° F,
    Скорость ветра в сукунду: ${response.data.wind.speed},
    Ощущается как: ${response.data.main.feels_like}° F,
    Облачность: ${response.data.clouds.all} % ,
    Высота над уровнем моря: ${response.data.main.sea_level} ,
    Страна: ${response.data.sys.country} 
    `)
    }
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));