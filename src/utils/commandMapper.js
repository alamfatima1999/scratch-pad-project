import toast from 'react-hot-toast';
import { moveCatSprite, sleepCatSprite, turnCatSprite } from './utils';

export const controlActions = async (command) => {
    try {
        const splitCmdResult = command.split(' ');
        switch (splitCmdResult[0]) {
            case 'Wait':
                if (splitCmdResult.length < 3) {
                    throw new Error('Invalid command format for Wait');
                }
                await sleepCatSprite(parseInt(splitCmdResult[1]), splitCmdResult[2]);
                break;

            default:
                throw new Error('Unknown command');
        }
    } catch (error) {
        console.error('Error in controlActions:', error);
        // Handle error here, e.g., show an error toast or log it
        toast.error('Error: ' + error.message);
    }
};

export const motionActions = async (command) => {
    try {
        let splitCmdResult = command.split(' ');
        splitCmdResult = splitCmdResult.filter((cmdStr) => cmdStr.trim());

        const cat = document.querySelector('#movingCat');
        if (!cat) {
            throw new Error('Cat element not found');
        }

        switch (splitCmdResult[0]) {
            case 'Move':
                if (splitCmdResult.length < 2) {
                    throw new Error('Invalid command format for Move');
                }
                moveCatSprite(cat, parseInt(splitCmdResult[1]));
                break;

            case 'Turn':
                if (splitCmdResult.length < 3) {
                    throw new Error('Invalid command format for Turn');
                }
                turnCatSprite(cat, parseInt(splitCmdResult[2]), splitCmdResult[1]);
                break;

            default:
                throw new Error('Unknown command');
        }
    } catch (error) {
        console.error('Error in motionActions:', error);
        // Handle error here, e.g., show an error toast or log it
        toast.error('Error: ' + error.message);
    }
};

export const looksActions = async (command) => {
    try {
        let splitCmdResult = command.split(' ');
        splitCmdResult = splitCmdResult.filter((cmdStr) => cmdStr.trim());

        const toastConfig = {
            duration: parseInt(splitCmdResult[3]) * 1000,
            position: 'top-right',
        };

        switch (splitCmdResult[0]) {
            case 'Say':
                if (splitCmdResult.length < 2) {
                    throw new Error('Invalid command format for Say');
                }
                toast(splitCmdResult[1], toastConfig);
                break;

            case 'Think':
                if (splitCmdResult.length < 2) {
                    throw new Error('Invalid command format for Think');
                }
                toast('Thinking... ' + splitCmdResult[1], toastConfig);
                break;

            default:
                throw new Error('Unknown command');
        }
    } catch (error) {
        console.error('Error in looksActions:', error);
        // Handle error here, e.g., show an error toast or log it
        toast.error('Error: ' + error.message);
    }
};

export const eventActions = async (command)=>{
    try {
        let splitCmdResult = command.split(' ');
        splitCmdResult = splitCmdResult.filter((cmdStr) => cmdStr.trim());

        switch (splitCmdResult[0]) {
            case 'When':
                return 

            default:
                throw new Error('Unknown command');
        }
    } catch (error) {
        console.error('Error in eventActions:', error);
        // Handle error here, e.g., show an error toast or log it
        toast.error('Error: ' + error.message);
    }
}
