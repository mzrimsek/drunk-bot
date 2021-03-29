function hasRole(member, roleId) {
    return member._roles.includes(roleId);
}

function isChannelMessage(message) {
    return message.guild.id !== undefined
}

module.exports = {
    hasRole,
    isChannelMessage
};
