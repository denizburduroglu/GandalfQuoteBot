const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

// client.once('ready', () => {
//     console.log('Codelyon is online!');
// });
const GANDALF_QUOTES = ['For even the very wise cannot see all ends.', 'Fly you fools', 'The treacherous are ever distrustful.', 'You will not pass!', 'Courage will now be your best defence against the storm that is at hand', 'Go back to the abyss! Fall into nothingness that awaits you and your master!']
client.on('error', console.error);
client.on('ready', () => {
    console.log('Gandalf Quote Bot is online!');
    var counter = 0;
    setInterval(() => {
        console.log('Set Activity: ');
        client.user.setActivity(GANDALF_QUOTES.at(getRandomInt(GANDALF_QUOTES.length)));
    }, 5000)
    
});

client.login('ODgxNTM1NjA4MjczNjQ5NjY0.YSuQAw.43H5cw96VeKDO8u4w9mlAKGPMbU');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}