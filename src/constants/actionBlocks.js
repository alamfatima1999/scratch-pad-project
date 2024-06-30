const actionBlocks = {
    Events: [
        {
            text: 'When $start #icon clicked',
            icon: 'flag'
        }
    ],
    Control: [
        {
            text: 'Wait 1 second'
        },
        {
            text: 'Wait 5 second'
        },
        {
            text: 'Wait 10 second'
        }
    ],
    Looks: [
        {
            text: 'Say Hello'
        },
        {
            text: 'Say Hello for 2 seconds'
        },
        {
            text: 'Think Hmmm'
        },
        {
            text: 'Think Hmmm for 3 seconds'
        }
    ],
    Motion: [
        {
            text: 'Move 10 steps'
        },
        {
            text: 'Turn $ACW #icon 15 degrees',
            icon: 'undo'
        },
        {
            text: 'Turn $CW #icon 15 degrees',
            icon: 'redo'
        }
    ]
};

export default actionBlocks;