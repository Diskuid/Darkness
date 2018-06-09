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
   
    let msg = message.content.toLowerCase();
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    let sender = message.author;   
   
    // Purge
    if (msg.startsWith(prefix + 'purge')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "bot-commander")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
if (msg.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (msg.startsWith(prefix + 'help')){
      const embed = new Discord.RichEmbed()
      .setTitle("**Revisa tus mensajes privados.**")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xd53939)
      .setFooter("Ragnarök Guild", client.user.avatarURL)
      .setTimestamp()
      message.channel.send({embed});
        message.author.send('```\n** Ragnarök bot - Comandos **\n\n'+
                            'PVP\n'+
                            '-> '+prefix+'pvp            :: Muestra los comandos que hay relacionados al PvP.\n'+  
                            '-> '+prefix+'pvp pokeban    :: Muestra los pokemon baneados en PvP.\n'+
                            '-> '+prefix+'pvp reglas     :: Muestra las reglas del PvP.\n'+
                            '-> '+prefix+'pvp report     :: Te da el link directo del foro para reportar.\n\n'+
                            'Otros\n'+
                            '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n'+
                            '-> '+prefix+'alola          :: Retorna un saludo como mensaje.\n```');
        
       } else
if (msg.startsWith(prefix + "hola")) {
            message.delete(); 
  message.channel.send(message + '\n https://media.tenor.com/images/8033571a6b54dad614051d4fa0569dd8/tenor.gif');
       } else
if (msg.startsWith(prefix + "hola2" )){
  const embed = new Discord.RichEmbed() 
  .setAuthor("Hola! "+message+" o/", message.author.avatarURL)
  .setColor(0x15d1be)
  .setImage("https://media.tenor.com/images/8033571a6b54dad614051d4fa0569dd8/tenor.gif");
        
        message.channel.send({embed});
        } else
       if (msg.startsWith(prefix +"alola" )){
        const embed = new Discord.RichEmbed() 
        .setAuthor("Alola! "+message.author.username+" o/", message.author.avatarURL)
        .setColor(0x15d1be)
        .setImage("https://cdn.discordapp.com/attachments/434155755357208587/434535939147169797/alola_vulpix_7u7.gif");
        
        message.channel.send({embed});
        } else       
if (msg.startsWith(prefix +"jirachi" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0xd53939)
  .setFooter("Ragnarök Guild", client.user.avatarURL)
  .setTimestamp()
  .setImage("http://78.media.tumblr.com/1be1b280590c698a07924540e3f497dc/tumblr_nc793zXLmN1qbmz7eo1_500.gif")
  .addField("Jirachi",
    "El Pokémon deseo. Conocido por tener el poder de conceder deseos, Jirachi soló está despierto durante 7 días cada 1000 años.")
  
  message.channel.send({embed});
} else
if (msg.startsWith(prefix +"darkrai" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0x000000)
  .setFooter("Ragnarök Guild", client.user.avatarURL)
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
    .setTitle("Ragnarök Guild - Blog")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Ragnarök Guild", client.user.avatarURL)
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
