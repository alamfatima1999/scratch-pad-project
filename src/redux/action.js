import actionTypes from './actionTypes';

export const appendTab = () => ({
    type: actionTypes.ADD_TAB
});

export const removeTab = (tabId) => ({
    type: actionTypes.REMOVE_TAB,
    payload: tabId
});

export const switchSpriteTab = (tabId) => ({
    type: actionTypes.SWITCH_SPRITE_TAB,
    payload: tabId
});

export const addSpriteCommand = (sprite, cmdID, cmdText) => ({
    type: actionTypes.ADD_SPRITE_CMD,
    payload: { sprite, cmd: { cmdID, cmdText } }
});

export const removeSpriteCommand = (sprite, cmdId) => ({
    type: actionTypes.REMOVE_SPRITE_CMD,
    payload: { sprite, cmdId }
});

export const updateHistoryCommandExecuted = (sprite, commands) => ({
    type: actionTypes.UPDATE_HISTORY_CMD,
    payload: { sprite, commands }
});
