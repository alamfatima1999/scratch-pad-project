export const sleepCat = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

export const sleepCatSprite = async (time, unit) => {
    switch (unit) {
        case 'milisecond':
            await sleepCat(time);
            return;
        case 'second':
            await sleepCat(time * 1000);
            return;
        case 'minute':
            await sleepCat(time * 1000 * 60);
            return;
        default:
            await sleepCat(time * 1000);
            return;
    }
};

export const moveCatSprite = (cat, steps) => {
    cat.style.transform += `translate(${steps * 10}px)`;
};

export const turnCatSprite = (cat, degree, dir) => {
    dir = dir === 'CW' ? 1 : -1;
    cat.style.transform += `rotate(${dir * degree}deg)`;
};


