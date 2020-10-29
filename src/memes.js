const settings = require('../config/settings');

function isValidMeme(message) {
    const isBot = message.author.bot;
    const isCorrectChannel = isInMemeChannel(message.channel.id);
    const isMeme = isPotentialMeme(message);
    return isCorrectChannel && isMeme && !isBot;
}

function isInMemeChannel(channelId) {
    const isMemeChannel = channelId === settings.meme_channel_id;
    const isDankMemeChannel = channelId === settings.dank_meme_channel_id;
    const isTestingChannel = channelId === settings.testing_channel_id;
    return isMemeChannel || isDankMemeChannel || isTestingChannel;
}

function isPotentialMeme(message) {
    const hasEmbeds = message.embeds.length !== 0;
    const hasAttachments = message.attachments.size !== 0;
    const imgRegex = "/\.(gif|jpg|jpeg|tiff|png)$/i";
    const youtubeRegex = "^(https?\:\/\/)?(www.youtube\.com|youtu\.?be)\/.+$";
    const isMediaLink = message.content.match(imgRegex) || message.content.match(youtubeRegex);
    return hasEmbeds || hasAttachments || isMediaLink;
}

module.exports = {
    isValidMeme
};