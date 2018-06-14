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
    let cont = message.content.slice(prefix.length).split(" ");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let sender = message.author;   
    let texto = args.join(" ");
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
   
      
    if (sender.id === '435965480826568704') {
            return;
        }
    if (msg.includes('alv')) {
            message.delete();
            message.reply('Por favor no uses malas palabras. \:Smash\:');
    }
    // Purge
    if (msg.startsWith(prefix + 'purge')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
// Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "Lider")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Necesitas el rol \`Lider\` para usar este comando.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Por favor usa un numero. \n**Ejemplo:** \`' + prefix + 'purge <numero>\`'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' Mensajes encontrados, borrando...'); // Lets post into console how many messages we are deleting

            message.delete();
            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
if(command === 'kick' ){
    if (!message.member.roles.find("name", "Lider")) return message.reply('No tienes permisos para usar este comando.'); // This checks to see if they DONT have it, the "!" inverts the true/false
    if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escribe una razón, `.kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No se ha podido kickear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

}
if (msg.startsWith(prefix + "yin")) {
    message.channel.send("yang!");
  }
   if (command === 'ping') {

    let ping = Math.floor(message.client.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
      
      });
    
  }else
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
if (command === 'hola') {
       message.delete();

       if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);

            message.guild.member(user);
            message.channel.send(sender + ' Te envia un saludo, ' + user + '\n https://gph.is/2JwW1q8');
       
      } else
if (command === 'pvp') {

       let reglas = args.join(" ");
   
       if (!reglas) return message.channel.send(':bookmark:  **PLAYER VS PLAYER** \n```\nEsta es la lista de comandos relacionados al PvP con la que actualmente cuento:\n\n'+
                            '  '+prefix+'PvP Reglas      »   Muestra las reglas actuales del PvP.\n'+  
                            '  '+prefix+'PvP PokeBan     »   Muestra los Pokémon baneados del PvP.\n'+
                            '  '+prefix+'PvP MoveBan     »   Muestra los movimientos baneados del PvP.\n'+
                            '  '+prefix+'PvP Coins       »   Muestra que son y para que sirven las PvP Coins.\n'+
                            '  '+prefix+'PvP Report      »   Muestra el link y una explicación acerca de como reportar  en el PvP.\n'+
                            '  '+prefix+'PvP Temporadas  »   Muestra información acerca de las temporadas de PvP.\n```');
       
      message.channel.send(':scroll:  **PvP - REGLAS**\n```diff\n'+
                            '  1.- El uso de movimientos, habilidades o ítems buggeados o aun no codificados que puedan ser abusados en PvP estan prohibidos.\n'+  
                            '  2.- Todos los Pokémon con mas de 601 en stats base están baneados del competitivo. Otros Pokémon tier Uber (Específicamente Blaziken) están de igual manera baneados. (Puedes revisar la lista completa con el comando ".PvP PokeBan")\n'+
                            '  3.- La retención de tiempo esta prohibida. (Atacar hasta el ultimo segundo y cosas así esta prohibido, sin embargo, el uso de movimientos repetidos esta permitido.)\n'+
                            '  4.- Colocar un estado de condición (Envenenar, Quemar, Paralizar, Dormir, Congelar) en tu Pokémon antes de una batalla esta prohibido.\n'+
                            '  5.- Elevar intencionalmente el ranking de otra cuenta, de cualquier forma, esta prohibido, y si se es capturado se tomaran acciones.\n'+
                            '  6.- El uso de las habilidades "Shadow Tag" y "Arena Trap" esta prohibido en las Rankeds.\n'+
                            '  7.- Solo puedes usar 1 de tus cuentas para PvP competitivo cada temporada. Usar cualquier cuenta que no sea tuya legítimamente, o usar mas de una cuenta resultara en un severo castigo.\n'+
                            '  8.- Forzar a los jugadores a desconectarse en una batalla clasificatoria con información falsa resultara en un castigo.\n'+
                            '  9.- "Unaware" esta actualmente baneado del PvP hasta que sea arreglado. La habilidad ignora mas stats potenciados de lo que deberia. (Ejemplo: Choice Band). Así como Clefable con Unaware con el movimiento Softboiled están baneados del competitivo. Esto debido a la entrada de las habilidades ocultas en la generación 5 en donde ese movimiento fue removido del set de movimientos de Clefable.\n\n'+
                            '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');

      } else
if (command === 'error') {

message.reply('nel prro')
  .then(msg => {
    msg.delete(10000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

      } else
if (command === 'alola') {
       message.delete();

       if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);

            message.guild.member(user);
            message.channel.send(sender + ' Te envia un saludo, ' + user + '\n https://gph.is/2y7EcwX');
       
      } else
       if (msg.startsWith(prefix +"alola2" )){
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
    } else 
       if (command === 'saying') {
   if (args[0] === "hola") return message.channel.send('Hola!')
else if (args[0] === "adiós") return message.channel.send('Hasta pronto!')
     }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
