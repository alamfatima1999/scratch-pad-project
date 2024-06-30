const computeBlockColor = (Name) => {
    switch (Name) {
        case 'Motion':
            return 'blue';
        case 'Control':
            return 'red';
        case 'Events':
            return 'yellow';
        case 'Looks':
            return 'purple';
        default:
            return 'green';
    }
};

export default computeBlockColor;
