import React from 'react';
import { InstructionMessage1, InstructionMessage2, InstructionMessage3, InstructionMessage4, InstructionMessage5, InstructionMessage6 } from '../constants/instructionMessage';

function Instructions({ isOpen, onRequestClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full p-6">
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                <p className="mb-4">{InstructionMessage1}</p>
                <p className="mb-4">{InstructionMessage2}</p>
                <p className="mb-4">{InstructionMessage3}</p>
                <p className="mb-4">{InstructionMessage4}</p>
                <p className="mb-4">{InstructionMessage5}</p>
                <p className="mb-4">{InstructionMessage6}</p>
                <button
                    onClick={onRequestClose}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Instructions;
