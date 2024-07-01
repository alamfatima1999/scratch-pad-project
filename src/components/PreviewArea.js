import React, { useState } from 'react';
import CatSprite from './CatSprite';
import { useSelector, useDispatch } from 'react-redux';
import actionParser from '../utils/actionParser';
import { updateHistoryCommandExecuted } from './../redux/action';
import toast from 'react-hot-toast';
import { HistoryCount } from '../constants/actionHistory';

export default function PreviewArea() {
    const commands = useSelector((state) => state.commands);
    const historyCommandsExecuted = useSelector((state) => state.historyCommandsExecuted);
    const currentTab = useSelector((state) => state.currentTab);
    const [repeatCount, setRepeatCount] = useState('');
    const dispatch = useDispatch();


    const reset = () => {
        const cat = document.querySelector('#movingCat');
        cat.style = '';
        toast.success('Reset', { position: 'top-right' });
    };

    const mergeSprite = (commands) => {
        const results = [];
        for (const sprite in commands) {
            results.push(...commands[sprite]);
        }
        return results;
    };

    const updateHistory = (nextCommands) => {
        let currentHistory = historyCommandsExecuted[currentTab] ? [...historyCommandsExecuted[currentTab]] : [];
        if (currentHistory.length + nextCommands.length > HistoryCount) {
            const excessLength = (currentHistory.length + nextCommands.length) - HistoryCount;
            currentHistory = currentHistory.slice(excessLength);
        }
        const updatedHistory = [...currentHistory, ...nextCommands];
        dispatch(updateHistoryCommandExecuted(currentTab, updatedHistory));
    };

    const handleRepeatLastActions = async () => {
        const count = parseInt(repeatCount, 10);
        if (isNaN(count) || count <= 0) {
            toast.error('Please enter a valid number', { position: 'top-right' });
            return;
        }
        if(count > HistoryCount){
            toast.error(`Please enter a number between 1 - ${HistoryCount}`, { position: 'top-right' });
            return
        }
        if (historyCommandsExecuted[currentTab]){
            const allCommands = [...historyCommandsExecuted[currentTab]];
            const lastCommands = allCommands.slice(-count);
            await actionParser(lastCommands);
        }
    };

    const handleRun = async () => {
        await actionParser([...commands[currentTab]]);
        updateHistory([...commands[currentTab]])
    };
    const handleRunAll = async () => {
        await actionParser(mergeSprite(commands));
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto p-2">
            <div className="w-full h-3/4  p-2">
                <CatSprite id="movingCat" className="transition-all" />
            </div>
            <div className=" w-full h-1/4">
                <div className="fixed right-5 bottom-5 flex justify-between w-80">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-gray-50 h-12 w-24 rounded"
                        onClick={handleRun}
                    >
                        Run
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-gray-50 h-12 w-24 rounded"
                        onClick={handleRunAll}
                    >
                        Run All Sprite
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-gray-50 h-12 w-24 rounded"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
                <div className="fixed right-5 bottom-20 flex justify-end w-80">
                    <input
                        type="text"
                        placeholder="Repeat last n actions"
                        value={repeatCount}
                        onChange={(e) => setRepeatCount(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 mr-2 w-46"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-gray-50 h-12 w-24 rounded"
                        onClick={handleRepeatLastActions}
                    >
                        Replay
                    </button>
                </div>
            </div>
            
        </div>
    );
}
