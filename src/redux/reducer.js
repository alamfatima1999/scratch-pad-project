import actionTypes from './actionTypes';
import { toast } from 'react-hot-toast';

const INITIAL_STATE = {
    tabCount: 1,
    historyCommandsExecuted:{},
    tabs: ['S1'],
    currentTab: 'S1',
    commands: {},
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TAB:
            return {
                ...state,
                tabs: [...state.tabs, `S${state.tabCount + 1}`],
                currentTab: `S${state.tabCount + 1}`,
                tabCount: state.tabCount + 1
            };
        case actionTypes.REMOVE_TAB:
            if (action.payload === 'S1') {
                toast.error(`Sprint 1 cannot be removed.`, {
                    position: 'top-right'
                });
                return state;
            }
            const filteredTab = state.tabs.filter(
                (tabId) => tabId !== action.payload
            );

            let currTabIndex = filteredTab.indexOf(state.currentTab);

            if (currTabIndex === -1) {
                currTabIndex = filteredTab.length - 1;
            }

            const cmds = state.commands;

            if (state.commands[action.payload]) {
                delete cmds[action.payload];
            }

            return {
                ...state,
                tabs: [...filteredTab],
                currentTab: filteredTab[currTabIndex],
                commands: { ...cmds }
            };

        case actionTypes.SWITCH_SPRITE_TAB:
            return {
                ...state,
                currentTab: action.payload
            };

        case actionTypes.ADD_SPRITE_CMD:
            const sprite = action.payload.sprite;
            const cmd = action.payload.cmd;

            if (!state.commands[sprite]) state.commands[sprite] = [];
            const newSpriteCmds = state.commands[sprite];
            newSpriteCmds.push(cmd);

            return {
                ...state,
                commands: {
                    ...state.commands,
                    [sprite]: [...newSpriteCmds]
                }
            };

        case actionTypes.REMOVE_SPRITE_CMD:
            let currentSpriteCommandList = state.commands[action.payload.sprite];
            let updatedCurrentSpriteCommandList = currentSpriteCommandList.filter((eachCommand) => { return eachCommand.cmdID != action.payload.cmdId })
            return {
                ...state,
                commands: {
                    ...state.commands,
                    [action.payload.sprite]: updatedCurrentSpriteCommandList
                }
            };

        case actionTypes.UPDATE_HISTORY_CMD:
            return {
                ...state,
                historyCommandsExecuted: {
                    ...state.historyCommandsExecuted,
                    [action.payload.sprite]: action.payload.commands
                }
            };

        default:
            return state;
    }
};

export default reducer;
