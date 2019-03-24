const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setGame(prefix+'help | By Diskuid'); 
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.author.bot) return;
   
    var msg = message.content.toLowerCase();
    let cont = message.content.slice(prefix.length).split(" ");
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let sender = message.author;   
    let texto = args.join(" ");
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
   const palabras = ["alv", "verga", "goder", "joder", "mierda", "culiao", "puto", "puta", "chinga", "cabron", "mames", "pinchi", "pito", "coño", "anal", "panocha", "teta", "polla", "mecos", "culo", "poto", "coger", "follar", "folla", "mamar", "paja", "pajear", "marica", "marico", "pendejo", "boludo", "cagon", "cochar", "chupala", "coña", "joto", "jota", "nigga", "chupa", "pija", "orto", "chota", "puti", "joti", "boludi", "vergui", "culi", "pendeji", "culi", "concha", "hdp", "ctm", "ql", "wn", "ptm", "gnr", "mlp", "idiota", "idioti", "pinche", "nalga"];
   
   
   if(palabras.some(p => msg.includes(p))){

        message.delete();
        message.reply('por favor no uses malas palabras. <:Smash:433720028358115349>')
        .then(msg => {
    msg.delete(3000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
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
if (msg.startsWith(prefix + 'kick' )){
    if (!message.member.roles.find("name", "Lider")) return message.reply('No tienes permisos para usar este comando.'); // This checks to see if they DONT have it, the "!" inverts the true/false
    if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escribe una razón, `.kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No se ha podido kickear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

}
if (msg.startsWith(prefix + "emoji")) {
   const ayy = client.emojis.find("name", "Smash");
   message.reply(`${ayy} LMAO`);
}
if (msg.startsWith(prefix + 'yin' )) {
    message.channel.send("yang!");
  }
if (msg.startsWith(prefix + 'ping')) {

    let ping = Math.floor(message.client.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
      
      });
    
  }else
if (msg.startsWith(prefix + 'help')){
      const embed = new Discord.RichEmbed()
      .setAuthor('Información')
      .setDescription("Revisa tus mensajes privados.")
      .setColor(0xd53939)
      .setFooter("Ragnarök Guild", client.user.avatarURL)
      .setTimestamp()
      message.channel.send({embed});
        message.author.send(':notebook: ** Ragnarök bot - Comandos **\n'+
                            '```cs\n'+
                            '# PvP Rankeds\n'+
                            '  '+prefix+'PvP Reglas        »   Muestra las reglas actuales del PvP.\n'+  
                            '  '+prefix+'PvP PokeBan       »   Muestra los Pokémon baneados del PvP.\n'+
                            '  '+prefix+'PvP MoveBan       »   Muestra los movimientos y habilidades baneados del PvP.\n'+
                            '  '+prefix+'PvP Clausulas     »   Muestra las cláusulas vigentes en el PvP.\n'+
                            '  '+prefix+'PvP Coins         »   Muestra que son y para que sirven las PvP Coins.\n'+
                            '  '+prefix+'PvP Temporadas    »   Muestra información acerca de las temporadas de PvP.\n\n'+
                            '# Informacion\n'+
                            '  '+prefix+'Reglas            »   Muestra las reglas del juego, el incumplimiento de estas puede resultar en ban.\n'+  
                            '  '+prefix+'Dig <Region>      »   Muestra información acerca de los spots para hacer dig en determinada región.\n'+
                            '  '+prefix+'Evs <Region>      »   Muestra información acerca de los spots de Evs en determinada región.\n\n'+
                            '# Reportes\n'+
                            '  '+prefix+'Report            »   Muestra información acerca de como reportar.\n'+  
                            '  '+prefix+'Report Trade      »   Muestra información acerca de como reportar una infracción relacionada con los intercambios.\n'+
                            '  '+prefix+'Report PvP        »   Muestra información acerca de como reportar una infracción relacionada con el PvP.\n'+
                            '  '+prefix+'Report chat       »   Muestra información acerca de como reportar una infracción relacionada con los Chat globales.\n'+
                            '  '+prefix+'Report Bug        »   Muestra información acerca de como reportar cualquier tipo de bug.\n\n'+
                            '# Baneos\n'+
                            '  '+prefix+'Ban               »   Muestra información acerca de los baneos en PRO.\n'+  
                            '  '+prefix+'Ban Dashboard     »   Link e información acerca del Dashboard para saber las razones de tu baneo.\n'+
                            '  '+prefix+'Ban Apelacion     »   Link e información acerca de como apelar tu baneo.\n\n'+
                            '# Otros\n'+
                            '  '+prefix+'Hola <Etiqueta>   »   Envía saludos a una persona especifica.\n'+
                            '  '+prefix+'Alola <Etiqueta>  »   Envía saludos a una persona especifica.\n```');
        
       } else
if (msg.startsWith(prefix + 'hola')) {
       message.delete();

       if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);

            message.guild.member(user);
            message.channel.send(sender + ' Te envia un saludo, ' + user + '\n https://gph.is/2JwW1q8');
       
      } else
if (msg.startsWith(prefix + 'pvp')) {
       if (args.length !== 1) {
           return message.channel.send(':bookmark:  **PLAYER VS PLAYER** \n```cs\n# Esta es la lista de comandos relacionados al PvP con la que actualmente cuento:\n\n'+
                            '  '+prefix+'PvP Reglas      »   Muestra las reglas actuales del PvP.\n'+  
                            '  '+prefix+'PvP PokeBan     »   Muestra los Pokémon baneados del PvP.\n'+
                            '  '+prefix+'PvP MoveBan     »   Muestra los movimientos baneados del PvP.\n'+
                            '  '+prefix+'PvP Clausulas   »   Muestra las cláusulas vigentes en el PvP.\n'+
                            '  '+prefix+'PvP Coins       »   Muestra que son y para que sirven las PvP Coins.\n'+
                            '  '+prefix+'PvP Report      »   Muestra el link y una explicación acerca de como reportar  en el PvP.\n'+
                            '  '+prefix+'PvP Temporadas  »   Muestra información acerca de las temporadas de PvP.\n```');
       } else if(args[0] === 'reglas') {
           message.channel.send(':scroll:  **PvP - REGLAS**\n```diff\n'+
                            '  1.- El uso de movimientos, habilidades e items que estén bugeados o no codificados de los cuales se pueda abusar en PvP esta prohibido.\n'+  
                            '  2.- Todos los Pokémon con stats base de más de 601 están prohibidos en las batallas clasificatorias (excepto Slaking). Otros Pokémon tier "Uber" también están prohibidos (específicamente "Blaziken - Speed Boost" [Blaziken - Blaze sí está permitido]). (Puedes revisar la lista completa con el comando ".PvP PokeBan".)\n'+
                            '  3.- La retención de tiempo esta prohibida. (Atacar hasta el último segundo y cosas así esta prohibido, sin embargo, el uso de movimientos repetidos esta permitido.)\n'+
                            '  4.- Colocar un estado de condición (Envenenar, Quemar, Paralizar, Dormir, Congelar) en tu Pokémon antes de una batalla esta prohibido.\n'+
                            '  5.- Elevar intencionalmente el ranking de otra cuenta, de cualquier forma, esta prohibido, y si se es capturado se tomaran acciones.\n'+
                            '  6.- El uso de las habilidades "Shadow Tag" y "Arena Trap" esta prohibido en las Rankeds.\n'+
                            '  7.- 7. Puedes usar solo 1 de tus propias cuentas para PvP dentro de cada temporada. El uso de cualquier cuenta que no posea legítimamente, o el uso de más de 1 cuenta , resultará en un duro castigo. (Esta regla se modificó temporalmente para probar las cuentas alternativas en la escala de clasificación, sin embargo, no puede tener más de una cuenta en el Top 25 al final de la temporada.)\n'+
                            '  8.- Forzar a los jugadores a desconectarse en una batalla clasificatoria con información falsa resultara en un castigo.\n'+
                            '  9.- "Unaware" esta actualmente baneado del PvP hasta que sea arreglado. La habilidad ignora mas stats potenciados de lo que debería. (Ejemplo: Choice Band). Así como Clefable con Unaware con el movimiento Softboiled están baneados del competitivo. Esto debido a la entrada de las habilidades ocultas en la generación 5 en donde ese movimiento fue removido del set de movimientos de Clefable.\n\n'+
                            '  10.- Sólo se puede usar un tipo de Rotom por equipo.\n\n'+
                                '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');
       } else if(args[0] === 'pokeban') {
           message.channel.send(':closed_book:  **PvP - POKÉMON BANEADOS**\n'+
                            '```cs\n'+
                            '# Estos son los Pókemon que esta prohibido usar en el PvP.\n\n'+
                            '  • Arceus\n'+
                            '  • Blaziken\n'+
                            '  • Darkrai\n'+
                            '  • Deoxys\n'+
                            '  • Dialga\n'+
                            '  • Genesect\n'+
                            '  • Giratina\n'+
                            '  • Groudon\n'+
                            '  • Ho-Oh\n'+
                            '  • Kyogre\n'+
                            '  • Kyurem\n'+
                            '  • Lugia\n'+
                            '  • Mewtwo\n'+
                            '  • Palkia\n'+
                            '  • Rayquaza\n'+
                            '  • Reshiram\n'+
                            '  • Xerneas\n'+
                            '  • Yveltal\n'+
                            '  • Zekrom\n\n'+
                           '// Ademas de cualquier tipo de Mega evolucion.```');
       }
} else
if (msg.startsWith(prefix + 'error')) {

message.reply('nel prro')
  .then(msg => {
    msg.delete(10000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

      } else
if (msg.startsWith(prefix + 'alola')) {
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
if (msg.startsWith(prefix + "jirachi" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0xd53939)
  .setFooter("Ragnarök Guild", client.user.avatarURL)
  .setTimestamp()
  .setImage("http://78.media.tumblr.com/1be1b280590c698a07924540e3f497dc/tumblr_nc793zXLmN1qbmz7eo1_500.gif")
  .addField("Jirachi",
    "El Pokémon deseo. Conocido por tener el poder de conceder deseos, Jirachi soló está despierto durante 7 días cada 1000 años.")
  
  message.channel.send({embed});
} else
if (msg.startsWith(prefix + "darkrai" )){
  const embed = new Discord.RichEmbed() 
  .setColor(0x000000)
  .setFooter("Ragnarök Guild", client.user.avatarURL)
  .setTimestamp()
  .setImage("https://78.media.tumblr.com/0df500bfa372165438dd16aed8aca7bc/tumblr_nit4mcbDwq1qlndspo1_500.gif")
  .addField("Darkrai",
    "El Pokémon pozo negro. La leyenda dice que en las noches sin luna, Darkrai hace que la gente duerma y les provoca pesadillas.")
  
  message.channel.send({embed});
} else
if (msg.startsWith(prefix + "test" )){
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
if (msg.startsWith(prefix + "blog" )){
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
