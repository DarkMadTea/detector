const Discord = require('discord.js');
let fs = require('fs');
const robot = new Discord.Client();
let config = require('./config.json');
let prefix = config.prefix;

robot.on('guildMemberAdd', (member) =>{
    member.roles.add('662290251263377408');
    console.log("The role has beed added to " + member);
});

robot.on('message', msg => {

    robot.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'кто тут пидор',
        },
    });

    let nervID = "503098565485133834";
    let bratvaID = "311147386225295361";

    let usersOfServer = 'users.txt';

    if (msg.guild.id === bratvaID){
        usersOfServer = 'users1.txt'
    }
    var array = fs.readFileSync(usersOfServer).toString().split("\n");
    let item = array[Math.floor(Math.random()*array.length)];

    let roleID = "797546408496332800";

    if (msg.content === prefix + 'ктопидор') {

        // for (let i = 0; i < arr.length; i++){
        //     if (msg.member.roles.cache.find(r => r.id === roleID)){
        //         msg.member.roles.remove(roleID);
        //         console.log("The role has beed removed")
        //     }
        // }

        msg.channel.send('Woob-woob, that\'s da sound of da pidor-police!');
        msg.channel.send('Ведется поиск в базе данных');
        msg.channel.send('Ведется захват подозреваемого');
        msg.channel.send(`И прекрасный человек сегодня... а нет, ошибка, всего-лишь пидор - <@${item}>`);

        // if(msg.guild.members.cache.has(item)){
        //     msg.guild.members.cache.get(item)
        //         .roles.add(roleID);
        //     console.log("the role has been added to <@"+item+">");
        // }

    }

    if ( ((msg.content.match(/Выбил/)) || (msg.content.match(/выбил/))) && (msg.guild.id === nervID)){
        msg.channel.send('You\'re fucking rich');
        msg.channel.send('https://tenor.com/view/stocks-only-go-up-sogu-hulk-penis-stonks-v-shape-recovery-gif-18971989');
    }

    if (msg.content === 'Кнопка!') {
        msg.channel.send('Мариааааазааааа!');
    }

    if (msg.content === 'Мариаза!') {
        msg.channel.send('Кнопкаa!');
    }

    if (msg.guild.id === bratvaID){
        if ( (msg.content.match(/right/)) || (msg.content.match(/version/)) || (msg.content.match(/гачи/)) || (msg.content.match(/!play/)) || (msg.content.match(/!Play/))){
            setTimeout(function () {
                msg.channel.send('YES, SIR');
                msg.channel.send('Let the cum begins!');
                msg.channel.send('https://tenor.com/view/gachi-gachi-hyper-gif-15959866');
            }, 500);
        }
    }
    if ( (msg.content.match(/right/)) || (msg.content.match(/version/)) || (msg.content.match(/гачи/)) || (msg.content.match(/!play/)) || (msg.content.match(/!Play/))){

    }
    
    if ((msg.content === '-play https://www.youtube.com/playlist?list=PLofa8IMwGJo1le-DVlYyw93aCc4_Ik3mc')
            || (msg.content.match(/right/))
            || (msg.content.match(/version/))
            || (msg.content.match(/гачи/))){
        setTimeout(function () {
            msg.channel.send('YES, SIR');
            msg.channel.send('Let the cum begins!');
            msg.channel.send('https://tenor.com/view/gachi-gachi-hyper-gif-15959866');
        }, 1000);
        // if(msg.member.voice.channel){
        //  msg.member.voice.channel.join();
            //let musicChannel = robot.channels.cache.find(channel => channel.name === "music-bots");
            // musicChannel.send('-play https://www.youtube.com/playlist?list=PLofa8IMwGJo1le-DVlYyw93aCc4_Ik3mc');
            // setTimeout(function () {
            //     msg.member.voice.channel.leave();
            // }, 5000);
        // }
    }
});

robot.login(process.env.TOKEN);
