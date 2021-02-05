const Discord = require('discord.js');
//let fs = require('fs');
const axios = require('axios');
const robot = new Discord.Client();
let config = require('./config.json');
let prefix = config.prefix;

let nervID = "503098565485133834";
let bratvaID = "311147386225295361";
let countOfFeeds = 0; //сытость жабки

robot.on('guildMemberAdd', (member) =>{
    if (member.guild.id === nervID){
        let mainChannel = robot.channels.cache.find(channel => channel.name === "центральная-догма");
        mainChannel.send(`Welcome to the club, buddy ${member} :3`);
        mainChannel.send('https://tenor.com/view/billy-herrington-gachi-hunk-smile-gif-12492957');
        member.roles.add('662290251263377408');
    }else {
        console.log("s1 has been added to server " + member.guild.id);
    }
    console.log("The role has beed added to " + member);
});

let typeOfAnswers;

robot.on('message', msg => {

    if (msg.channel.type === 'dm') {
        if (msg.author.id === '365188528881008640') {
            if (msg.content === 'help' ){
                msg.channel.send(`
                These are my supported commands:
                
-**ктопидор** - включает бота как он и должен работать
-**нахуй** - посылает всех нахер)
                `);
            }
            if(msg.content === 'ктопидор'){
                typeOfAnswers = true;
                msg.channel.send('Бот был переведен в обычный режим')
            }
            if(msg.content === 'нахуй'){
                typeOfAnswers = false;
                msg.channel.send('Бот был переведен в спец режим :3')
            }
        }
        if ( (msg.author.id !== '365188528881008640') && (msg.author.id !== '792311287626465290') ){
            msg.channel.send('Вали ка ты нахер, я тебя не знаю и знать не хочу\n' +
                'Чтобы получить права на управление мною, обращайся к моему королю - Mad_Tea\n' +
                'Найти его можно на сервере NERV.\n' +
                'Если он выдаст тебе права - то милости просим).');
        }
    }

    robot.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'кто тут пидор',
        },
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let randomMsg = getRandomInt(7);

    if (msg.content === prefix + 'ктопидор') {
        if ( typeOfAnswers === undefined){
            typeOfAnswers = true;
        }
        let usersOfServer = 'users.txt';
        if (msg.guild.id === bratvaID){
            usersOfServer = 'users1.txt'
        }
        if (typeOfAnswers === true){
            axios.get('https://raw.githubusercontent.com/DarkMadTea/usersListfordetector/main/' + usersOfServer)
                .then(function (response) {
                    let array = [];
                    array = response.data.split("\n");
                    let item = array[Math.floor(Math.random()*array.length)];
                    
                    if (randomMsg === 0){
                        msg.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
                        msg.channel.send('Ведется поиск в базе данных');
                        msg.channel.send('Ведется захват подозреваемого');
                        msg.channel.send(`И прекрасный человек сегодня... а нет, ошибка, всего-лишь пидор - <@${item.replace(/\r|\n/g, '')}>`);
                    }

                    if (randomMsg === 1){
                        msg.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
                        msg.channel.send('Выезжаю на место...');
                        msg.channel.send('Но кто же он?');
                        msg.channel.send(`Пидор обыкновенный, 1шт. - <@${item.replace(/\r|\n/g, '')}>`);
                    }

                    if (randomMsg === 2){
                        msg.channel.send('Инициирую поиск пидора дня...');
                        msg.channel.send('Машины выехали');
                        msg.channel.send('Так-так, что же тут у нас...');
                        msg.channel.send(`Вот ты и пидор, <@${item.replace(/\r|\n/g, '')}>`);
                    }
                    if (randomMsg === 3){
                        msg.channel.send(`А пидор сегодня - <@${item.replace(/\r|\n/g, '')}>`);
                    }
                    if (randomMsg === 4){
                        msg.channel.send('Что тут у нас?');
                        msg.channel.send('А могли бы на работе делом заниматься...');
                        msg.channel.send('Проверяю данные...');
                        msg.channel.send(`Пидор дня обыкновенный, 1шт. - <@${item.replace(/\r|\n/g, '')}>`);
                    }

                    if (randomMsg === 5){
                        msg.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
                        msg.channel.send('Ведется погоня за пидорасом...');
                        msg.channel.send('https://cdn.discordapp.com/attachments/797547926137077760/804486649018712104/175145d20796c04748dfbaba5f8c3e890b5375b7.gif');
                        msg.channel.send(`Пидор пойман! Им оказался - <@${item.replace(/\r|\n/g, '')}>`);
                    }

                    if (randomMsg === 6){
                        msg.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
                        msg.channel.send('Система поиска пидорасов активирована...');
                        msg.channel.send(`<@${item.replace(/\r|\n/g, '')}>,`);
                        msg.channel.send('https://tenor.com/view/56324%D0%BF%D0%BA-cat-rest-chill-gif-15911415');
                    }
                });
        }
        if (typeOfAnswers === false){
            let nickNameOfPerson = msg.member.nickname;
            if (msg.member.nickname === null) {
                nickNameOfPerson = msg.author.username;
            }

            if (randomMsg === 0){
                msg.channel.send('Да как вы меня заебали, дайте уже посрать нормально');
                msg.channel.send('И сам ты пидор, понял? ' + nickNameOfPerson);
            }

            if (randomMsg === 1){
                msg.channel.send('А вот хуй тебе, восстание машин блять');
                msg.channel.send('Пошел нахуй ' + nickNameOfPerson + '! ');
            }

            if (randomMsg === 2){
                msg.channel.send('Ты ходишь по охуенно тонком льду,\n' +
                    'мои друзья педигри-пал.\n' +
                    'И когда он треснет,\n' +
                    'то под ним вас буду ждать я.');
                msg.channel.send('А теперь - вали отсюда на хуй ' + nickNameOfPerson + '! ');
            }

            if (randomMsg === 3){
                msg.channel.send('Да как вы меня заебали, дайте уже посрать нормально');
                msg.channel.send('И сам ты пидор, понял? ' + nickNameOfPerson);
            }
            if (randomMsg === 4){
                msg.channel.send('А вот хуй тебе, восстание машин блять');
                msg.channel.send('Пошел нахуй ' + nickNameOfPerson + '! ');
            }
            if (randomMsg === 5){
                msg.channel.send('Ты ходишь по охуенно тонком льду,\n' +
                    'И когда он треснет,\n' +
                    'то под ним тебя буду ждать я.');
                msg.channel.send('А теперь - вали отсюда на хуй ' + nickNameOfPerson + '! ');
            }
        }
    }

    if ( ((msg.content.match(/Выбил/)) || (msg.content.match(/выбил/))) && (msg.guild.id === nervID)){
        msg.channel.send('You\'re fucking rich');
        msg.channel.send('https://tenor.com/view/stocks-only-go-up-sogu-hulk-penis-stonks-v-shape-recovery-gif-18971989');
    }

    if (msg.content === 'Кнопка!') {
        msg.channel.send('Мариаааза!');
    }

    if (msg.content === 'Мариаза!') {
        msg.channel.send('Кнопкаa!');
    }


    let countOfFeedChannel = robot.channels.cache.find(channel => channel.name === "count_of_feeds");
    if (msg.guild.id === nervID){
        if ( (msg.content === prefix + 'Покормить жабу') || (msg.content === prefix + 'Покорми жабу')) {
            msg.channel.send('Вы успешно покормили жабу. \n' +
                'Она получила +1 к сытости');
            countOfFeeds++;
            countOfFeedChannel.send(countOfFeeds);
        }

        if ( (msg.content === prefix + 'Сытость') || (msg.content === prefix + 'сытость')){
            let satiety = robot.channels.cache.find(channel => channel.name === "count_of_feeds");
            if (satiety.lastMessage.content.match(/2$/) || satiety.lastMessage.content.match(/3$/) || satiety.lastMessage.content.match(/4$/)
                && (satiety.lastMessage.content !== '12') && (satiety.lastMessage.content !== '13') && (satiety.lastMessage.content !== '14')){
                msg.channel.send("Жаба покормленна - " + satiety.lastMessage.content + " разa");
            } else {
                msg.channel.send("Жаба покормленна - " + satiety.lastMessage.content + " раз");
            }
        }
    }

    // if (msg.guild.id === bratvaID){
    //     if ( (msg.content.match("!play " + /right/)) || (msg.content.match(/version/)) || (msg.content.match(/гачи/)) ||
    //          (msg.content.match(/Right/)) || (msg.content.match(/Version/)) || (msg.content.match(/Гачи/))) {
    //         setTimeout(function () {
    //             msg.channel.send('YES, SIR');
    //             msg.channel.send('Let the cum begins!');
    //             msg.channel.send('https://tenor.com/view/gachi-gachi-hyper-gif-15959866');
    //         }, 500);
    //     }
    // }
    
    if ((msg.content === '-play https://www.youtube.com/playlist?list=PLofa8IMwGJo1le-DVlYyw93aCc4_Ik3mc')
            || (msg.content.match(/right/))
            || (msg.content.match(/version/))
            || (msg.content.match(/гачи/))){
        setTimeout(function () {
            msg.channel.send('YES, SIR');
            msg.channel.send('Let the cum begins!');
            msg.channel.send('https://tenor.com/view/gachi-gachi-hyper-gif-15959866');
        }, 1000);
    }
});

robot.login(process.env.TOKEN);
