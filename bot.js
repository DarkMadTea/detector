const Discord = require('discord.js');
const robot = new Discord.Client();
let config = require('./config.json');
let prefix = config.prefix;

// robot.on("ready", function() {
//     console.log(robot.user.username + " запустился!");
// });

//id of pidors role = 797546408496332800

robot.on('message', msg => {

    let arr = [ "365188528881008640", "267389822715297793", "527986206861033492",
                "337342638867087360", "234766661943689216", "305414938715750410",
                "200100239959392256", "349589505147404289", "284037375322226689",
                "356805341515874304"];

    // let arr = ["<@365188528881008640>", "<@267389822715297793>", "<@527986206861033492>",
    //     "<@337342638867087360>", "<@234766661943689216>", "<@305414938715750410>",
    //     "<@200100239959392256>", "<@349589505147404289>", "<@284037375322226689>",
    //     "<@356805341515874304>"];

    let item = arr[Math.floor(Math.random()*arr.length)];


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

    if (msg.content === 'Кнопка!') {
        msg.channel.send('Мариааааазааааа!');
    }

    if (msg.content === 'Мариаза!') {
        msg.channel.send('Кнопкаa!');
    }

    if (msg.content === '-play https://www.youtube.com/playlist?list=PLofa8IMwGJo1le-DVlYyw93aCc4_Ik3mc'){
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
