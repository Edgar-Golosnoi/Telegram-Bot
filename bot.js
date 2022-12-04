/* eslint-disable no-undef */
const axios = require('axios');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5930144928:AAGZgzG7VlnGeSqIRWrnMMfUeINx1aGm1cE');
bot.start((ctx) => ctx.reply('Привет друг, я расскажу тебе о погоде, скинь свою геолокацию...'));
bot.on('message', async (ctx) => {
  console.log(ctx.message.location);
  if(ctx.message.locacion){
  console.log(ctx.message.location);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=&{ctx.message.location.latitude}&lon=&{ctx.message.location.lolgitude}&appid={5930144928:AAGZgzG7VlnGeSqIRWrnMMfUeINx1aGm1cE}`
  const response = await axios.get(url);c0053
  console.log(response);
  ctx.reply(`${response.data.name}: ${response.data.main.temp} C`);
  }
}),
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
