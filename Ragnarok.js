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
   const palabras = ["alv", "verga", "goder", "joder", "mierda", "culiao", "puto", "puta", "chinga", "cabron", "pinchi", "pito", "coño", "anal", "panocha", "teta", "polla", "mecos", "culo", "coger", "follar", "folla", "mamar", "paja", "pajear", "marica", "marico", "pendejo", "boludo", "cagon", "cochar", "chupala", "coña", "joto", "jota", "nigga", "chupa", "pija", "orto", "chota", "puti", "joti", "boludi", "vergui", "culi", "pendeji", "culi", "concha", "hdp", "ctm", "ql", "ptm", "gnr", "mlp", "idiota", "idioti", "pinche", "nalga"];
   
   
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
                message.channel.send('Por favor usa un número. \n**Ejemplo:** \`' + prefix + 'purge <numero>\`'); //\n means new line.
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
                            '  '+prefix+'Hola <Etiqueta>   »   Envía saludos a una persona específica.\n'+
                            '  '+prefix+'Alola <Etiqueta>  »   Envía saludos a una persona específica.\n```');
        
       } else
if (msg.startsWith(prefix + 'hola')) {
       message.delete();

       if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);

            message.guild.member(user);
            message.channel.send(sender + ' Te envía un saludo, ' + user + '\n https://gph.is/2JwW1q8');
       
      } else
if (msg.startsWith(prefix + 'pvp')) {
       if (args.length !== 1) {
           return message.channel.send(':bookmark:  **PLAYER VS PLAYER** \n```cs\n# Esta es la lista de comandos relacionados al PvP con la que actualmente cuento:\n\n'+
                            '  '+prefix+'PvP Reglas       »   Muestra las reglas actuales del PvP.\n'+  
                            '  '+prefix+'PvP PokeBan      »   Muestra los Pokémon baneados del PvP.\n'+
                            '  '+prefix+'PvP MoveBan      »   Muestra los movimientos baneados del PvP.\n'+
                            '  '+prefix+'PvP ItemBan      »   Muestra los ítems baneados del PvP.\n'+
                            '  '+prefix+'PvP AbilityBan   »   Muestra las habilidades baneadas del PvP.\n'+
                            '  '+prefix+'PvP Clausulas    »   Muestra las cláusulas vigentes en el PvP.\n'+
                            '  '+prefix+'PvP FAQ          »   Muestra las preguntas más frecuentes relacionadas a las PvP coins, temporadas y reportes.```');
       } else if(args[0] === 'reglas') {
           message.channel.send(':scroll:  **PvP - REGLAS**\n```diff\n'+
                            '  1.- El uso de movimientos, habilidades e items que estén bugeados o no codificados de los cuales se pueda abusar en PvP esta prohibido.\n'+  
                            '  2.- Todos los Pokémon con stats base de más de 601 están prohibidos en las batallas clasificatorias (excepto Slaking). Otros Pokémon tier "Uber" también están prohibidos (específicamente "Blaziken - Speed Boost" [Blaziken - Blaze sí está permitido]). (Puedes revisar la lista completa con el comando ".PvP PokeBan".)\n'+
                            '  3.- La retención de tiempo esta prohibida. (Atacar hasta el último segundo y cosas así esta prohibido, sin embargo, el uso de movimientos repetidos esta permitido.)\n'+
                            '  4.- Colocar un estado de condición (Envenenar, Quemar, Paralizar, Dormir, Congelar) en tu Pokémon antes de una batalla esta prohibido.\n'+
                            '  5.- Elevar intencionalmente el ranking de otra cuenta, de cualquier forma, esta prohibido, y si se es capturado se tomaran acciones.\n'+
                            '  6.- El uso de las habilidades "Shadow Tag" y "Arena Trap" esta prohibido en las Rankeds.'+
                            '  7. Puedes usar solo 1 de tus propias cuentas para PvP dentro de cada temporada. El uso de cualquier cuenta que no posea legítimamente, o el uso de más de 1 cuenta , resultará en un duro castigo. (Esta regla se modificó temporalmente para probar las cuentas alternativas en la escala de clasificación, sin embargo, no puede tener más de una cuenta en el Top 25 al final de la temporada.)\n'+
                            '  8.- Forzar a los jugadores a desconectarse en una batalla clasificatoria con información falsa resultara en un castigo.\n'+
                            '  9.- "Unaware" esta actualmente baneado del PvP hasta que sea arreglado. La habilidad ignora mas stats potenciados de lo que debería. (Ejemplo: Choice Band). Así como Clefable con Unaware con el movimiento Softboiled están baneados del competitivo. Esto debido a la entrada de las habilidades ocultas en la generación 5 en donde ese movimiento fue removido del set de movimientos de Clefable.\n'+
                            '  10.- Sólo se puede usar un tipo de Rotom por equipo.\n\n'+
                                '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');
       } else if(args[0] === 'clausulas') {
           message.channel.send(':scroll:  **PvP - CLÁUSULAS**\n```diff\n'+
                            '  • Cláusula "OHKO": Movimientos OHKO (Fissure, Guillotine, Horn Drill, and Sheer Cold) están prohibidos in las batallas clasificatorias.\n'+  
                            '  • Cláusula "Species": Dos Pokémon de la misma especie no podrán estar en el mismo equipo.\n'+
                            '  • Cláusula del sueño: Si ya has puesto un Pokémon a dormir en el equipo contrario, y todavía está durmiendo, no puedes poner a otro para dormir. (Pokémon que se ponen en este estado por ataque propio no se tienen en cuenta.)\n'+
                            '  • Cláusula "Baton Pass": Un Pokémon no puede pasar +Velocidad y otra estadística simultáneamente. (Limitado a un solo Pokémon con Baton Pass por equipo.)\n'+
                            '  • Cláusula de Evasión: Un Pokémon no puede tener movimientos que incrementen o disminuyan la evasión o la precisión en su moveset. El uso de este tipo de movimientos está prohibidos.\n'+
                            '  • Cláusula "Swagger": El uso del movimiento "Swagger" está prohibido.\n\n'+
                                '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');
       } else if(args[0] === 'pokeban') {
           message.channel.send(':scroll:  **PvP - POKÉMON PROHIBIDOS**\n\n'+
                             '`▸ Pokémon prohibidos en PvP.`\n'+
                             '```md\n'+
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
                             '> Además de cualquier tipo de Mega-evolución.\n'+
                             '```');
       } else if(args[0] === 'moveban') {
           message.channel.send(':scroll:  **PvP - MOVIMIENTOS PROHIBIDOS**\n\n'+
                             '`▸ Movimientos bugeados BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Burn Up [No quita el tipo fuego a tu Pokémon después de usar el ataque]\n'+
                             '  • Endure [Funciona cada vez que es usado]\n'+
                             '  • Last Resort [Su restricción no funciona correctamente]\n'+
                             '  • Memento + Focus Sash [Pokémon que tengan equipado Focus Sash no mueren al usar Memento]\n'+
                             '  • Sleep Talk whilst awake [No consume PP, si ves a un oponente sin usar un movimiento mientras está despierto, es esto]\n'+
                             '    - Si te quedaste sin PP en tus otros movimientos y tienes que usar Sleep Talk mientras estás despierto, por favor toma screenshot.\n\n'+
                             '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video.\n'+
                             '```\n'+
                             '`▸ Movimientos bugeados NO BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Baton Pass [No pasa SpAtk, y se puede usar aunque tenga equipado un item que fuerce a usar movimientos ofensivos]\n'+
                             '  • Chatter [No confunde al objetivo]\n'+
                             '  • Detect [Movimientos de dos turnos pueden inflingir efectos secundarios]\n'+
                             '  • Explosion [Puede hacer KO a objetivos aún cuando estos tienen Sturdy o Focus Sash]\n'+
                             '  • Fake Out [Fake out no funciona cuando es cambiado con un movimiento como volt switch, roar, dragon tail, etc.]\n'+
                             '  • Hex [No incrementa el daño si tiene un problema de estado]\n'+
                             '  • Smack Down [No tira al Pokémon rival]\n'+
                             '  • Trick + Choice Item [Cuando usas Trick en un oponente que posee un item "Choice", puedes seguir usando otros movimientos]\n'+
                             '  • Volt-switch [Usable aún cuando el Pokémon rival posee Volt Absorb]\n\n'+
                             '> El uso de estos movimientos no es reportable.\n'+
                             '```\n'+
                             '`▸ Movimientos aún no codificados BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Belch [Puede ser usado aún sin comer una baya]\n'+
                             '  • Doom Desire [No tiene que cargar]\n'+
                             '  • Razor wind [No tiene que cargar]\n'+
                             '  • Stockpile [Puede ser usado más de 3 veces]\n\n'+
                             '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video.\n'+
                             '```\n'+
                             '`▸ Movimientos aún no codificados NO BANEABLES en PvP`');   
           message.channel.send('```md\n'+
                             'Attract, Bide, Camoulage, Captivate, Conversion, Conversion 2, Echoed Voice, Entrainment, Fiery Dance, Gastro acid, Grudge, Healing Wish, Ingrain, King´s Shield, Lock On, Me First, Metronome, Mimic, Minimize, Mirror Move, Mud Sport, Nature Gift, Nature Power, Nightmare, Power Split, Power Swap, Power Trick, Rage Powder, Reflect type, Rollout, Sacred Sword, Safeguard, Skill Swap, Snatch, Stored Power, Substitute, Tailwind. Transform, Uproar, Water Sport.\n\n'+

                             '> El uso de estos movimientos no es reportable.\n'+
                             '```');
       } else if(args[0] === 'itemban') {
           message.channel.send(':scroll:  **PvP - ÍTEMS PROHIBIDOS**\n\n'+
                             '`▸ Ítems bugeados BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Shell bell [Cura el doble de cantidad de lo que debería]\n\n'+
                             '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video.\n'+
                             '```\n'+
                             '`▸ Ítems bugeados NO BANEABLES en PvP`\n'+
                             '```md\n'+
                             '   • Ninguno\n'+
                             '```\n'+
                             '`▸ Ítems aún no codificados BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Ninguno\n'+
                             '```\n'+
                             '`▸ Ítems aún no codificados NO BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Ninguno\n'+
                             '```');
       } else if(args[0] === 'abilityban') {
           message.channel.send(':scroll:  **PvP - HABILIDADES PROHIBIDAS**\n\n'+
                             '`▸ Habilidades bugeadas BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Defeatist [No reduce los stats a la mitad]\n'+
                             '  • Fly + Gale Wings [Fly tiene prioridad en su primer turno y pierde su prioridad en el segundo]\n'+
                             '  • Unburden [El Pokémon mantendra el aumento de velocidad aun si este es cambiado]\n'+
                             '  • Wonder Guard + Focus Sash [Shedinja con Focus Sash no morirá con Spikes / Stealth Rock]\n\n'+
                             '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video.\n'+
                             '```\n'+
                             '`▸ Habilidades bugeadas NO BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Competitive [Sólo funciona con movimientos que bajen estadisticas, no con estados]\n'+
                             '  • Simple [Los boosteos no se acumulan correctamente]\n'+
                             '  • Synchronize [A veces falla al pasar un estado al Pokémon rival]\n'+
                             '  • Trace [No copia la habilidad al cambiar después de un K.O.]\n'+
                             '  • Habilidades de clima [El clima del Pokémon más rápido se impondrá en vez de el del Pokémon más lento si son puesto al mismo tiempo]\n\n'+
                             '> El uso de estas habilidades no es reportable.\n'+
                             '```\n'+
                             '`▸ Movimientos aún no codificados BANEABLES en PvP`\n'+
                             '```md\n'+
                             '  • Ninguna\n'+
                             '```\n'+
                             '`▸ Movimientos aún no codificados NO BANEABLES en PvP`\n'+
                             '```md\n'+
                             'Air Lock, Aura Break, Color Change, Cute Charm, Dark Aura, Fairy Aura, Flash Fire, Flower Gift, Flower Veil, Forecast, Friend Guard, Fur Coat, Grass Pelt, Honey Gather, Ice Body, Illuminate, Illusion, Imposter, Klutz, Minus, Moody, Multitype, Plus, Refrigerate, Slow Start, Stance Change, Symbiosis, Telepathy, Teravolt, Turboblaze, Victory Star, Zen Mode.\n\n'+
                             '> El uso de estas habilidades no es reportable.\n'+
                             '```');         
       } else if(args[0] === 'faq') {
           message.channel.send(':page_facing_up:  **PvP - FAQ**\n\n'+

                             '`-` **__Temporadas__**\n\n'+
                             '`▸ ¿Qué es una temporada?`\n'+
                             '```md\n'+
                             '  • Una temporada PvP es un periodo de tiempo en el cual se compite por llegar al puesto #1 ganando puntos cada vez que ganas una batalla clasificatoria.\n'+
                             '```\n'+
                             '`▸ ¿Cuánto tiempo dura?`\n'+
                             '```md\n'+
                             '  • Por lo general, una temporada suele durar 30 días, se reinicia los primeros días de cada mes.\n'+
                             '```\n'+
                             '`▸ ¿Hay premios?`\n'+
                             '```md\n'+
                             '  • Sí, los mejores jugadores suelen tener recompensas al final de cada temporada, además, se les invita a un torneo exclusivo para ellos.\n'+
                             '```\n\n'+
                             '`-` **__PvP Coins__**\n\n'+
                             '`▸ ¿Qué son?`\n'+
                             '```md\n'+
                             '  • Las PvP Coins como su nombre lo dice, son un tipo de moneda dentro del juego.\n'+
                             '```\n'+
                             '`▸ ¿Cómo se consiguen?`\n'+
                             '```md\n'+
                             '  • La obtención de este tipo de moneda es exclusivo de las batallas PvP clasificatorias, 1 moneda por victoria.\n'+
                             '```\n'+
                             '`▸ ¿Para qué sirven?`\n'+
                             '```md\n'+
                             '  • Este tipo de moneda puede ser intercambiada por objetos exclusivos, los NPCs dedicados a la venta de ítems a cambio de las PvP Coins se encuentran en las principales ciudades y son llamados "PvP Coin Master".\n'+
                             '```\n\n'+
                             '`-` **__Reportes__**\n\n'+
                             '`▸ ¿Qué es un reporte?`\n'+
                             '```md\n'+
                             '  • Si dentro de una partida clasificatoria se comete alguna infracción, esta se puede reportar en el foro para que castigue al infractor.\n'+
                             '```\n'+
                             '`▸ ¿Como se reporta a alguien?`\n'+
                             '```md\n'+
                             '  • Para reportar a alguien simplemente se debe entrar en el foro, y en la sección correspondiente hacer el reporte ("Report Center" > "Silver Server"), este debe contener evidencia de dicha infracción.\n'+
                             '```\n'+
                             '`▸ ¿Los demás pueden ver mi reporte?`\n'+
                             '```md\n'+
                             '  • No, todos los reportes son privados, sólo el staff correspondiente lo puede ver.\n'+
                             '```\n'+
                             '`▸ Plantilla para reportar a alguien`\n'+
                             '```md\n'+
                             '**Titulo del reporte explicando cual es la infracción que se reporta**\n\n'+
                             'Reported player: (Nombre del jugador reportado)\n'+
                             'Reason: (Explicación por la que estás reportando al jugador)\n\n'+
                             '> Debes incluir la evidencia en el reporte (imágenes o video).\n'+
                             '> El reporte debe estar preferentemente escrito en inglés.\n'+
                             '```');
       } else if(args[0] === '123') {
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
else if (args[0] === "adios") return message.channel.send('Hasta pronto!')
     }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
