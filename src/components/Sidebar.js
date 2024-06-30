import React from 'react';
import actionBlocks from '../constants/actionBlocks';
import ActionItem from './ActionItem';
import { allowDrop, deleteDiv } from '../utils/dndUtils';

export default function Sidebar() {
    return (
        <div
            onDrop={deleteDiv}
            onDragOver={allowDrop}
            className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
        >
            {Object.keys(actionBlocks).map((blockName) => (
                <ActionItem
                    key={blockName}
                    title={blockName}
                    data={actionBlocks[blockName]}
                />
            ))}
        </div>
    );
}
