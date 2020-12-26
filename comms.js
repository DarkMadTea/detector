//const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = process.env.PREFIX; // «Вытаскиваем» префикс

// Команды //

function test(robot, mess, args) {
    let randomPer = mess.guild.members.cache.random().user;
    mess.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
    mess.channel.send('Ведется поиск в базе данных');
    mess.channel.send('Ведется захват подозреваемого');
    mess.channel.send('И прекрасный человек сегодня... а нет, ошибка, всего-лишь пидор - ' + `${randomPer}`)
}


// Список команд //

var comms_list = [{
    name: "ктопидор",
    out: test,
    about: "ктопидор"
}];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды

module.exports.comms = comms_list;
