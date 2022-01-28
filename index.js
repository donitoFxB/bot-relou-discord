const Discord = require("discord.js") 
const {SlashCommandBuilder} = require("@discordjs/builders")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES 
    ]
})  

var texte; 

Client.on("ready", () => {
    console.log("bot is ready")
}); 

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    texte = message.content

    if(texte.endsWith("quoi") == true ){
       
        message.channel.send("feur")
    }
}) ;


Client.login(process.env.TOKEN) ; 