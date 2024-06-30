import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Instructions from './components/Instructions';
import { deleteSprite, allowDrop } from './utils/dndUtils';

export default function App() {
  const [isInstructionsOpen, setInstructionsOpen] = useState(true);

  const closeInstructions = () => setInstructionsOpen(false);

  useEffect(() => {
    setInstructionsOpen(true);
  }, []);

  return (
    <div 
      onDrop={deleteSprite}
      onDragOver={allowDrop} 
      className="bg-blue-100 pt-6 font-sans h-screen overflow-hidden">
      <Instructions isOpen={isInstructionsOpen} onRequestClose={closeInstructions} />
      <div className="h-screen flex flex-row">
        <div className="flex-1 h-screen flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div className="w-1/3 h-screen flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
