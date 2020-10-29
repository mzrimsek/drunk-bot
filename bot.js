require('dotenv').config();

const discord = require('discord.js');
const logger = require('winston');
const admin = require('firebase-admin');

const settings = require('./config/settings');
const firebase = require('./config/firebase');

const { getCommandAction } = require('./src/commands');
const { hasRole, isChannelMessage } = require('./src/utils');
const { isValidMeme } = require('./src/memes');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';

const bot = new discord.Client();

admin.initializeApp({
    credential: admin.credential.cert(firebase.service_account),
    databaseURL: firebase.database_url
});

bot.login(settings.token);

let firestore = null;
const firestoreSettings = {
    timestampsInSnapshots: true
};

bot.on('ready', () => {
    logger.info('Connected');
    logger.info(`Logged in as: ${bot.user.tag} - (${bot.user.id})`);
    try {
        firestore = admin.firestore();
        firestore.settings(firestoreSettings);
        logger.info('Connection to Firebase established');
    } catch (e) {
        logger.error('Could not connect to Firebase');
        logger.error(e.message);
    }
});

bot.on('message', async message => {
    const member = await message.guild.fetchMember(message.author);
    const isDrunk = hasRole(member, settings.drunk_role_id);
    const isCommand = message.content.substring(0, 1) === settings.command_prefix;

    if (isCommand) {
        const action = getCommandAction(message.content);
        const channelMessage = isChannelMessage(message);

        if (channelMessage) {
            switch (action) {
                case 'geese': {
                    message.channel.send('Fuck these geese up!');
                    break;
                }
            }
        }
    } else if (!isDrunk) {
        const normalizedMessage = message.content.toLowerCase();

        if (normalizedMessage.includes('chuggers') || normalizedMessage.includes('c h u g g e r s')) {
            message.react(settings.drink_emote);
        }

        const shouldReactToMeme = isValidMeme(message);
        if (shouldReactToMeme) {
            message.react(settings.upvote_emote)
                .then(() => message.react(settings.downvote_emote));
        }
    }
});