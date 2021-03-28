function hasRole(member, roleId) {
    return member._roles.includes(roleId);
}

function getUserNameString(userId) {
    return `<@!${userId}>`;
}

function isChannelMessage(message) {
    return message.guild.id !== undefined
}

module.exports = {
    hasRole,
    getUserNameString,
    isChannelMessage
};
