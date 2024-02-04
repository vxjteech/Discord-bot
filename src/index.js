require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Embed, ActivityType, Activity} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);

    client.user.setActivity({
        name: '.gg/Proximate | p!help',
        type: ActivityType.Watching
    });
});


client.on('messageCreate', (message) => {
    if (message.content === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle('__Server Information__')
        .setDescription("Welcome to Proximate! This is the official community server of our game development studio.")
        .setColor('Fuchsia')
        .setThumbnail('https://media.discordapp.net/attachments/1003748285611253760/1165717546184495205/standard_4.gif?ex=6547de10&is=65356910&hm=a9ef9fb3e40f80f5de247aeac71801f2d95405a45460b1ab91542de728675b49&=')
        message.channel.send({ embeds: [embed]});
        const embed2 = new EmbedBuilder()
        .setColor('Purple')
        .setTitle('__Important Links__')
        .setDescription("[**Roblox Group**](https://www.roblox.com/groups/13474470/Proximate#!/about)\n\ [**Discord Terms**](https://discord.com/terms)\n\ [**Discord Guidelines**](https://discord.com/guidelines)")
        message.channel.send({ embeds: [embed2]});
        const embed3 = new EmbedBuilder()
        .setColor('DarkPurple')
        .setTitle('**Server Rules**')
        .setDescription("**#1** - Follow the Discord Terms and Guidelines.\n\ **#2** - NSFW is forbidden, with the rule applying even on personal avatars and usernames.\n\ **#3** - Advertising is forbidden, you are not allowed to advertise anything without proper permission.\n\ **#4** - Any drama or toxicity is forbidden, you are not to argue or behave toxically against anyone.\n\ **#5** - Disrespecting Proximate Staff or influencing their statements is forbidden, Staff always has last the word.\n\ **#6** - English is the only language used in this server, talking in other languages is forbidden.\n\ **#7** - Impersonating any Staff is strictly forbidden.\n\ **#8** - Use common sense, if a certain subject is not stated in rules, you may still get punished for it.\n\ **By joining the server, you automatically agree to our rules. Not knowing content of our rules won't protect you from a punishment.**\n\ **We reserve the right to change our rules anytime without any official announcement.**")
        .setImage('https://media.discordapp.net/attachments/1003748285611253760/1165717545437900883/standard_3.gif?ex=6547de10&is=65356910&hm=8f806aa9e6d90229ddacd2f0df81a83b6c8a27f323965c09a8d1b7652ebc7d93&=')
        message.channel.send({ embeds: [embed3]});
    }  
});

client.on('messageCreate', (message) => {
    if (message.content === 'p!info') {
        message.channel.send(":pushpin: | **Proximate Bot** \n\ *Author:* `Nyxifier` \n\ *Version:* `1.0` \n\ *License:* `ISC` \n\ > ***Proximate.*** *2023.*");
    }  
});

client.on('messageCreate', (message) => {
    if (message.content === 'p!help') {
        const embed = new EmbedBuilder()
        .setTitle(':bookmark_tabs: **Help Menu**')
        .setDescription("***Commands List*** \n\ `p!help` - Displays this menu \n\ `p!info` - Displays application's info")
        .setColor('Fuchsia')
        message.channel.send({ embeds: [embed]});
    }  
});

client.on('messageCreate', (message) => {
    if (message.content === 'p!syph') {
        message.channel.send("https://tenor.com/view/vergil-gif-12846910");
    }  
});

client.on('messageCreate', (message) => {
    if (message.content === 'suggestion') {
        const embed = new EmbedBuilder()
        .setTitle('__Suggestions__')
        .setDescription(":pencil: If you want to send a suggestion, use the **/suggest** comand in <#1135919259835441232>. Your suggestion will appear **here**!")
        .setColor('Fuchsia')
        message.channel.send({ embeds: [embed]});
    }  
});


client.login(process.env.TOKEN);