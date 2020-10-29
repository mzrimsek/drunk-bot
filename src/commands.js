function getCommandArgs(message) {
    return message.substring(1).split(' ');
}

function getCommandAction(message) {
    const args = getCommandArgs(message);
    return args[0];
}

function getNotificationCommand(message) {
    const args = getCommandArgs(message);
    const reason = args.splice(1).join(' ');

    return {
        reason
    }
}

function getUserCommand(message) {
    try {
        const args = getCommandArgs(message);
        const targetUserId = args[1].substring(3, args[1].length - 1);
        const reason = args.splice(2).join(' ');

        return {
            targetUserId,
            reason
        };
    } catch (e) {
        return undefined;
    }
}

module.exports = {
    getCommandAction,
    getNotificationCommand,
    getUserCommand
};
