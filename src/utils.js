function hasRole(member, roleId) {
    return member._roles.includes(roleId);
}

function getUserNameString(userId) {
    return `<@!${userId}>`;
}

function hasNonTextContent(message) {
    const regex = ':.*?:|[^\x00-\x7F]+';
    return message.match(regex);
}

function isChannelMessage(message) {
    return message.guild.id !== undefined
}

module.exports = {
    hasRole,
    getUserNameString,
    hasNonTextContent,
    isChannelMessage
};
