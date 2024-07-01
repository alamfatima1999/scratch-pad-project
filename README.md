# Scratch Starter Project

Welcome to the Scratch starter project! This guide will help you get started with setting up and running the project on your local machine.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- GIT
- VS-CODE

### Installation

1. Clone the repository to your local machine:
    ```bash

    git clone https://github.com/alamfatima1999/scratch-pad-project.git

    ```
2. Navigate to the project directory:

    ```bash

    cd <project-directory>

    ```
3. Install the dependencies:

    ```bash

    npm i
    
    ```

### Running the Project

1. Start the development server:

    ```bash

    npm start

    ```
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Project Structure

Briefly explain the main directories and files in the project.

```
<project-directory>/
├── node_modules/       # Contains all the npm dependencies
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # React components
│   ├── redux/          # Redux components
│   ├── constants/      # Constants
│   ├── utils/          # Utility Methods & functions
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point of the application
│   └── ...             # Other source files
├── .gitignore          # Git ignore file
├── package.json        # NPM dependencies and scripts
├── README.md           # Project documentation
└── ...                 # Other configuration files
```

## Project Info 
This visual code editor for Javascript that is similar to MIT Scratch : https://scratch.mit.edu/projects/editor/

- We have tried to implement basic Looks, Motion & Controls Actions on Sprite

## Application Instructions

1. `Welcome to Scratch Pad`;
2. `Drag 'n' Drop Sprite/Action to the left to Remove`;
3. `Drag 'n' Drop Action to the mid area`;
4. `Press Run to execute current sprite actions, Press Run All to execute all sprite actions, & Reset to reset cat position`;
5. `Add a number & you can replay last n actions performed on the sprite`;

## Deployed on:

Vercel : https://scratch-pad-project.vercel.app/

Netlify : https://scratch-pad-project.netlify.app/


