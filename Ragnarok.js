const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setGame(prefix+'help | By Diskuid'); 
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
   
   var msg = message.content.toLowerCase();
   
  if (msg.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (msg.startsWith(prefix + 'help')){
      const embed = new Discord.RichEmbed()
      .setTitle("**Revisa tus mensajes privados.**")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xd53939)
      .setFooter("Darkness Guild", client.user.avatarURL)
      .setTimestamp()
      message.channel.send({embed});
        message.author.send('```\n**DARKNESS - Comandos**\n\n'+
                            'PVP\n'+
                            '-> '+prefix+'pvp            :: Muestra los comandos que hay relacionados al PvP.\n'+  
                            '-> '+prefix+'pvp pokeban    :: Muestra los pokemon baneados en PvP.\n'+
                            '-> '+prefix+'pvp reglas     :: Muestra las reglas del PvP.\n'+
                            '-> '+prefix+'pvp report     :: Te da el link directo del foro para reportar a alguien.\n'+
                            '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                            '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                            '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                            '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                            '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```');
        
       } else
       if (msg.startsWith(prefix +"hola" )){
        const embed = new Discord.RichEmbed() 
        .setAuthor("Hola! "+message.author.username+" o/", message.author.avatarURL)
        .setColor(0x000000)
        .setImage("https://media.tenor.com/images/8033571a6b54dad614051d4fa0569dd8/tenor.gif");
        
        message.channel.send({embed});
        } else
       if (msg.startsWith(prefix +"alola" )){
        const embed = new Discord.RichEmbed() 
        .setAuthor("Alola! "+message.author.username+" o/", message.author.avatarURL)
        .setColor(0x000000)
        .setImage("https://cdn.discordapp.com/attachments/434155755357208587/434535939147169797/alola_vulpix_7u7.gif");
        
        message.channel.send({embed});
        } else       
if (msg.startsWith(prefix +"jirachi" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0xd53939)
  .setFooter("Darkness Guild", client.user.avatarURL)
  .setTimestamp()
  .setImage("http://78.media.tumblr.com/1be1b280590c698a07924540e3f497dc/tumblr_nc793zXLmN1qbmz7eo1_500.gif")
  .addField("Jirachi",
    "El Pokémon deseo. Conocido por tener el poder de conceder deseos, Jirachi soló está despierto durante 7 días cada 1000 años.")
  
  message.channel.send({embed});
} else
if (msg.startsWith(prefix +"darkrai" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0x000000)
  .setFooter("Darkness Guild", client.user.avatarURL)
  .setTimestamp()
  .setImage("https://78.media.tumblr.com/0df500bfa372165438dd16aed8aca7bc/tumblr_nit4mcbDwq1qlndspo1_500.gif")
  .addField("Darkrai",
    "El Pokémon pozo negro. La leyenda dice que en las noches sin luna, Darkrai hace que la gente duerma y les provoca pesadillas.")
  
  message.channel.send({embed});
} else
  if (msg.startsWith(prefix +"test" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("http://gamecore-guild.blogspot.com")
    .addField("Campo de linea 1 ",
      "Este es un valor de campo, puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
    message.channel.send({embed});
  } else
  if (msg.startsWith(prefix +"blog" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("Darkness Guild - Blog")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Darkness Guild", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("http://gamecore-guild.blogspot.com")
    .addField("Campo de linea 1 ",
      "Este es un valor de campo, puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
    message.channel.send({embed});
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
