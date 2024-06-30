import {
    controlActions,
    motionActions,
    looksActions,
    eventActions
} from './commandMapper';

const actionParser = async (commands) => {
    for (const cmd of commands) {
        await actionRunner(cmd);
    }
};

const actionRunner = async (cmd) => {
    if (cmd.cmdID.includes('Control')) return controlActions(cmd.cmdText);
    if (cmd.cmdID.includes('Events')) return eventActions(cmd.cmdText);
    if (cmd.cmdID.includes('Looks')) return looksActions(cmd.cmdText);
    if (cmd.cmdID.includes('Motion')) return motionActions(cmd.cmdText);
};

export default actionParser;
