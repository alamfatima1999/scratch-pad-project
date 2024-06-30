import React from 'react';
import { useSelector } from 'react-redux';
import { allowDrop, drop } from '../utils/dndUtils';
import TabArea from './TabArea';
import actionParser from '../utils/actionParser';

export default function MidArea() {
    const commands = useSelector((state) => state.commands);
    const tabs = useSelector((state) => state.tabs);
    const currentTab = useSelector((state) => state.currentTab);

    const onClickofEachAction =(e)=>{
        const id = e?.target?.id;
        if (!id.startsWith('dragged')) return;
        handleRun(id);
    }

    const handleRun = async (id) => {
        let commandToExecute = commands[currentTab].filter((eachCommand) => { return eachCommand.cmdID === id});
        await actionParser([...commandToExecute]);

    };
    return (
        <div className="flex-1 h-full">
            <TabArea />
            {tabs.map((tab) => (
                <div
                    id={tab}
                    key={tab + 'div'}
                    onDrop={drop}
                    onDragOver={allowDrop}
                    className={`flex-1 h-full overflow-auto ${
                        tab === currentTab ? 'block' : 'hidden'
                    }`}
                    onClick={onClickofEachAction}
                />
            ))}
        </div>
    );
}
