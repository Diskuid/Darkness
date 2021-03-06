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
   const palabras = ["alv", "verga", "goder", "joder", "mierda", "culiao", "puto", "puta", "chinga", "cabron", "pinchi", "pito", "coño", "panocha", "teta", "polla", "mecos", "culo", "coger", "follar", "folla", "mamar", "paja", "pajear", "marica", "marico", "pendejo", "boludo", "cagon", "cochar", "chupala", "coña", "joto", "jota", "nigga", "chupa", "pija", "orto", "chota", "puti", "joti", "boludi", "vergui", "culi", "pendeji", "culi", "concha", "hdp", "ctm", "ql", "ptm", "gnr", "mlp", "idiota", "idioti", "pinche", "nalga"];
   
   
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
        message.author.send(':page_facing_up: **RAGNARÖK GUILD BOT**\n\n'+
                            '`★ Estos son algunos de los comandos con los que cuento actualmente`\n'+
                            '```cs\n'+
                            '# PvP Rankeds\n'+
                            '  '+prefix+'PvP Reglas       »   Muestra las reglas actuales del PvP.\n'+  
                            '  '+prefix+'PvP PokeBan      »   Muestra los Pokémon baneados del PvP.\n'+
                            '  '+prefix+'PvP MoveBan      »   Muestra los movimientos baneados del PvP.\n'+
                            '  '+prefix+'PvP ItemBan      »   Muestra los ítems baneados del PvP.\n'+
                            '  '+prefix+'PvP AbilityBan   »   Muestra las habilidades baneadas del PvP.\n'+
                            '  '+prefix+'PvP Clausulas    »   Muestra las cláusulas vigentes en el PvP.\n'+
                            '  '+prefix+'PvP FAQ          »   Muestra las preguntas más frecuentes relacionadas a las PvP coins, temporadas y reportes.\n\n'+
                            '# Información\n'+
                            '  '+prefix+'Reglas            »   Muestra las reglas del juego, el incumplimiento de estas puede resultar en un baneo permanente.\n'+  
                            '  '+prefix+'Dig <Región>      »   Muestra información acerca de los spots para hacer dig en determinada región.\n'+
                            '  '+prefix+'Evs <Región>      »   Muestra información acerca de los spots de Evs en determinada región.\n\n'+
                            '# Reportes\n'+
                            '  '+prefix+'Report            »   Muestra información acerca de como reportar.\n'+  
                            '  '+prefix+'Report Trade      »   Muestra información acerca de como reportar una infracción relacionada con los intercambios.\n'+
                            '  '+prefix+'Report PvP        »   Muestra información acerca de como reportar una infracción relacionada con el PvP.\n'+
                            '  '+prefix+'Report chat       »   Muestra información acerca de como reportar una infracción relacionada con los chats globales.\n'+
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
if (msg.startsWith(prefix + 'reglas')) {
            message.channel.send(':warning:  **REGLAS GENERALES** \n\n'+
                                '**1.** Al registrarte en Pokemon Revolution Online aceptas y reconoces los Términos y Condiciones y estas Reglas del juego.\n'+
                                '**2.** Cada persona tiene permitido un máximo de cuatro cuentas propias.\n'+
                                '       *- Sólo se puede tener una cuenta por dirección de correo electrónico.*\n'+
                                '**3.** No se recomienda compartir cuentas, pero está permitido.\n'+
                                '       *- El propietario de la cuenta será responsable por cualquier infracción cometida en dicha cuenta.\n'+
                                '       - Las cuentas compartidas con usted no cuentan como una de sus 4 cuentas a menos que se le otorgue la propiedad total de dicha cuenta.\n'+
                                '       - No se ofrecerá soporte en casos en los que se está baneado por compartir una IP en la cual se cometió una infracción.*\n'+
                                '**4.** Intercambios por dinero u objetos in-real life están estrictamente prohibidos y todas las cuentas involucradas recibirán una prohibición permanente si se llevan a cabo.\n'+
                                '       Esto incluye, pero no se limita a:\n'+
                                '       *- Comprar o vender cualquier cosa en PRO por dinero o bienes en la vida real.\n'+
                                '       - Intercambiar cualquier cosa en PRO por artículos, dinero, etc. en otro juego.\n'+
                                '       - Comprar o vender una cuenta en PRO por dinero o bienes en la vida real.*\n'+
                                '**5.** El uso de cualquier tipo de software no autorizado, piratería o edición del juego y/o cliente está prohibido. \n'+
                                '       Esto incluye:\n'+
                                '       *- Cualquier tipo de software automatizado. (bots, macro).\n'+
                                '       - Software que se inyecta en los archivos de PRO para dar ventajas injustas. (hack de velocidad).\n'+
                                '       - Software externo que ofrece ventajas injustas, que no están respaldados por PRO.*\n'+
                                '**6.** El abuso de fallas y no reportarlas tan pronto como sea posible, resultará en sanciones.\n'+
                                '       *- Este tipo de infracción no se anulará a menos que todas las ganancias ilegítimas puedan ser eliminadas de la cuenta.*');
               message.channel.send('**7.** No reportar evidencia incriminatoria, ayudar a un usuario a evadir un ban, y la ocultación de pertenencias obtenidas ilegalmente están estrictamente prohibidas.\n'+
                                   '       *- No informar sobre un usuario que sabes que ha hecho trampa o ha abusado de errores.\n'+
                                   '       - Compartir cuentas con un usuario que está baneado permanentemente.\n'+
                                   '       - Comerciar Pokémon, artículos, dinero, etc., robados, capturados mediante bots o ganados ilegítimamente sabiendo de su origen.*\n'+
                                   '**8.** Las Reglas de Intercambio deben ser seguidas en todo momento. - Para más información usar el comando ".trade reglas".\n'+
                                   '       *- Las reglas pueden diferir dependiendo de la plataforma en la que el usuario está usando (el foro, el juego o el chat de discord).\n'+
                                   '       - Estafar a otro usuario al momento del intercambio resultará en una prohibición permanente inmediata.*\n'+
                                   '**9.** Al jugar PvP Rankeds en PRO, aceptas las Reglas de PvP. - Para más información usar el comando ".pvp".\n'+
                                   '       *- Las reglas de PvP no se aplican a las batallas no clasificatorias o amistosas.*\n'+
                                   '**10.** Al participar en los chats del juego, aceptas y reconoces las Reglas de chat. - Para más información usar el comando ".chat reglas".\n'+
                                   '       *- Los propietarios de canales privados o líderes de clanes tienen derecho a moderar sus canales.\n'+
                                   '       - Los insultos y el acoso nunca son aceptables, incluso cuando se hacen en canales privados.\n'+
                                   '       - El personal de PRO sólo moderará los mensajes privados si reportados a través del Centro de Reportes.* \n'+
                                   '**11.** El comportamiento deplorable, la profanidad, el spam y la publicación de contenido inapropiado y/o para adultos están en prohibidos.\n'+
                                   '       *- El personal de PRO informará a las autoridades correspondientes si su delito se considera ilegal.*\n');
                  message.channel.send('**12.** Queda prohibido publicar enlaces maliciosos, como enlaces de phishing, contenido para adultos o cualquier cosa inapropiada para niños.\n'+
                                      '**13.** Hacerse pasar por un miembro del personal de PRO está estrictamente prohibido y resultará en una sanción severa si se intenta.\n'+
                                      '**14.** Al registrar una cuenta, no debe tomar un nombre de usuario que sea inadecuado para los niños.\n'+
                                      '       *- Puedes llegar a ser baneado permanentemente si el nombre de tu cuenta se considera inapropiado.*\n'+
                                      '**15.** Obtener acceso no autorizado a la cuenta de otro usuario está estrictamente prohibido y tendrá graves consecuencias.\n');
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
           message.channel.send(':scroll:  **PvP - REGLAS**\n\n`▸ Reglas generales del PvP competitivo.`\n```diff\n'+
                            '  1.- El uso de movimientos, habilidades e ítems que estén bugeados o no codificados de los cuales se pueda abusar en PvP esta prohibido.\n'+  
                            '  2.- Todos los Pokémon con stats base de más de 601 están prohibidos en las batallas clasificatorias (excepto Slaking). Otros Pokémon tier "Uber" también están prohibidos (específicamente "Blaziken - Speed Boost" [Blaziken - Blaze sí está permitido]). (Puedes revisar la lista completa con el comando ".PvP PokeBan".)\n'+
                            '  3.- La retención de tiempo esta prohibida. (Atacar hasta el último segundo y cosas así esta prohibido, sin embargo, el uso de movimientos repetidos esta permitido.)\n'+
                            '  4.- Colocar un estado de condición (Envenenar, Quemar, Paralizar, Dormir, Congelar) en tu Pokémon antes de una batalla está prohibido.\n'+
                            '  5.- Elevar intencionalmente el ranking de otra cuenta, de cualquier forma, esta prohibido, y si se es capturado se tomarán acciones.\n'+
                            '  6.- El uso de las habilidades "Shadow Tag" y "Arena Trap" esta prohibido en las Rankeds.\n'+
                            '  7.- Puedes usar sólo 1 de tus propias cuentas para PvP dentro de cada temporada. El uso de cualquier cuenta que no posea legítimamente, o el uso de más de 1 cuenta resultará en un duro castigo. (Permitidas 2 cuentas propias temporalmente.)\n'+
                            '  8.- Forzar a los jugadores a desconectarse en una batalla clasificatoria con información falsa resultará en un castigo.\n'+
                            '  9.- Clefable con Unaware con el movimiento Softboiled están baneados del competitivo, esto debido a la entrada de las habilidades ocultas en la generación 5 en donde ese movimiento fue removido del set de movimientos de Clefable.\n'+
                            '  10.- Sólo se puede usar un tipo de Rotom por equipo.\n\n'+
                            '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');
       } else if(args[0] === 'clausulas') {
           message.channel.send(':scroll:  **PvP - CLÁUSULAS**\n\n`▸ Cláusulas vigentes en el PvP competitivo.`\n```md\n'+
                            '  • Cláusula "OHKO": Movimientos OHKO (Fissure, Guillotine, Horn Drill, y Sheer Cold) están prohibidos in las batallas clasificatorias.\n'+  
                            '  • Cláusula "Species": Dos Pokémon de la misma especie no podrán estar en el mismo equipo.\n'+
                            '  • Cláusula del sueño: Si ya has puesto un Pokémon a dormir en el equipo contrario, y todavía está durmiendo, no puedes poner a otro para dormir. (Pokémon que se ponen en este estado por ataque propio no se tienen en cuenta.)\n'+
                            '  • Cláusula "Baton Pass": Un Pokémon no puede pasar +Velocidad y otra estadística simultáneamente. (Limitado a un solo Pokémon con Baton Pass por equipo.)\n'+
                            '  • Cláusula de Evasión: Un Pokémon no puede tener movimientos que incrementen o disminuyan la evasión o la precisión en su moveset. El uso de este tipo de movimientos está prohibidos.\n'+
                            '  • Cláusula "Swagger": El uso del movimiento "Swagger" está prohibido.\n\n'+
                            '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -\n```');
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
                             '  • Shaymin + su forma Sky\n'+
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
           message.channel.send(':scroll:  **PvP - REGLAS**\n\n`▸ Reglas generales del PvP competitivo.`\n```diff\n'+
                            '  1.- El uso de movimientos, habilidades e ítems que estén bugeados o no codificados de los cuales se pueda abusar en PvP esta prohibido.\n'+  
                            '  2.- Todos los Pokémon con stats base de más de 601 están prohibidos en las batallas clasificatorias (excepto Slaking). Otros Pokémon tier "Uber" también están prohibidos (específicamente "Blaziken - Speed Boost" [Blaziken - Blaze sí está permitido]). (Puedes revisar la lista completa con el comando ".PvP PokeBan".)\n'+
                            '  3.- La retención de tiempo esta prohibida. (Atacar hasta el último segundo y cosas así esta prohibido, sin embargo, el uso de movimientos repetidos esta permitido.)\n'+
                            '  4.- Colocar un estado de condición (Envenenar, Quemar, Paralizar, Dormir, Congelar) en tu Pokémon antes de una batalla está prohibido.\n'+
                            '  5.- Elevar intencionalmente el ranking de otra cuenta, de cualquier forma, esta prohibido, y si se es capturado se tomarán acciones.\n'+
                            '  6.- El uso de las habilidades "Shadow Tag" y "Arena Trap" esta prohibido en las Rankeds.\n'+
                            '  7.- Puedes usar sólo 1 de tus propias cuentas para PvP dentro de cada temporada. El uso de cualquier cuenta que no posea legítimamente, o el uso de más de 1 cuenta resultará en un duro castigo. (Permitidas 2 cuentas propias temporalmente.)\n'+
                            '  8.- Forzar a los jugadores a desconectarse en una batalla clasificatoria con información falsa resultará en un castigo.\n'+
                            '  9.- Clefable con Unaware con el movimiento Softboiled están baneados del competitivo, esto debido a la entrada de las habilidades ocultas en la generación 5 en donde ese movimiento fue removido del set de movimientos de Clefable.\n'+
                            '  10.- Sólo se puede usar un tipo de Rotom por equipo.\n\n'+
                            '- Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -```\n\n'+
                            ':scroll:  **PvP - CLÁUSULAS**\n\n'+
                            '`▸ Cláusulas vigentes en el PvP competitivo.`');
           message.channel.send('```md\n'+
                            '  • Cláusula "OHKO": Movimientos OHKO (Fissure, Guillotine, Horn Drill, y Sheer Cold) están prohibidos in las batallas clasificatorias.\n'+  
                            '  • Cláusula "Species": Dos Pokémon de la misma especie no podrán estar en el mismo equipo.\n'+
                            '  • Cláusula del sueño: Si ya has puesto un Pokémon a dormir en el equipo contrario, y todavía está durmiendo, no puedes poner a otro para dormir. (Pokémon que se ponen en este estado por ataque propio no se tienen en cuenta.)\n'+
                            '  • Cláusula "Baton Pass": Un Pokémon no puede pasar +Velocidad y otra estadística simultáneamente. (Limitado a un solo Pokémon con Baton Pass por equipo.)\n'+
                            '  • Cláusula de Evasión: Un Pokémon no puede tener movimientos que incrementen o disminuyan la evasión o la precisión en su moveset. El uso de este tipo de movimientos está prohibidos.\n'+
                            '  • Cláusula "Swagger": El uso del movimiento "Swagger" está prohibido.\n\n'+
                            '> Para reportar cualquiera de estas infracciones son necesarias capturas de pantalla y/o video. -```\n\n'+
                            ':scroll:  **PvP - POKÉMON PROHIBIDOS**\n\n'+
                            '`▸ Pokémon prohibidos en PvP.`\n');
          message.channel.send('```md\n'+
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
                             '```\n\n'+
                             ':scroll:  **PvP - MOVIMIENTOS PROHIBIDOS**\n\n'+
                              '`▸ Movimientos bugeados BANEABLES en PvP`\n');
           message.channel.send('```md\n'+
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
                             '```\n\n'+
                             ':scroll:  **PvP - ÍTEMS PROHIBIDOS**\n\n'+
                             '`▸ Ítems bugeados BANEABLES en PvP`\n');
           message.channel.send('```md\n'+
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
                             '```\n\n'+
                             ':scroll:  **PvP - HABILIDADES PROHIBIDAS**\n\n'+
                             '`▸ Habilidades bugeadas BANEABLES en PvP`\n');
           message.channel.send('```md\n'+
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
                             '```\n\n'+
                             ':page_facing_up:  **PvP - FAQ**\n\n'+
                             '`-` **__Temporadas__**\n\n'+
                             '`▸ ¿Qué es una temporada?`\n');         
           message.channel.send('```md\n'+
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
       }
} else
               if (msg.startsWith(prefix + 'error')) {

                     message.reply('nel prro')
  .then(msg => {
    msg.delete(10000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
} else
               if (msg.startsWith(prefix + 'ren')) {
       message.delete();
            message.channel.send('```diff\n'+
                            '- RENOVANDO -\n'+
                            '```'
  )
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
