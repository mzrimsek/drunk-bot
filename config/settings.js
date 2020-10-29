const settings = {
    token: process.env.DISCORD_TOKEN,
    command_prefix: process.env.COMMAND_PREFIX,
    server_id: process.env.SERVER_ID,
    drunk_role_id: process.env.BOT_ROLE_ID,
    meme_channel_id: process.env.MEME_CHANNEL_ID,
    dank_meme_channel_id: process.env.MEME_CHANNEL2_ID,
    testing_channel_id: process.env.TESTING_CHANNEL_ID,
    drink_emote: process.env.DRINK_EMOTE,
    upvote_emote: process.env.UPVOTE_EMOTE,
    downvote_emote: process.env.DOWNVOTE_EMOTE,
};

module.exports = settings;