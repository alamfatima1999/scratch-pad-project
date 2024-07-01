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

// OLD Methods
// export const moveCatSprite = (cat, steps) => {
//     cat.style.transform += translate(${steps * 10}px);
// };


// export const turnCatSprite = (cat, degree, dir) => {
//     dir = dir === 'CW' ? 1 : -1;
//     cat.style.transform += rotate(${dir * degree}deg);
// };



// New method SET 1 - Working

export const moveCatSprite = (cat, steps) => {
    const parent = cat.parentElement;
    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;
    const catRect = cat.getBoundingClientRect();

    // Extract the current transform values
    let currentX = 0, currentY = 0, currentRotate = 0;
    const match = cat.style.transform.match(/translate\((-?\d*\.?\d+)px, (-?\d*\.?\d+)px\).*rotate\((-?\d+)deg\)/);
    if (match) {
        currentX = parseFloat(match[1]);
        currentY = parseFloat(match[2]);
        currentRotate = parseFloat(match[3]);
    }

    // Calculate the new position based on rotation
    const radian = (Math.PI / 180) * currentRotate;
    const deltaX = Math.cos(radian) * steps * 10;
    const deltaY = Math.sin(radian) * steps * 10;
    const newX = currentX + deltaX;
    const newY = currentY + deltaY;

    const catWidth = catRect.width;
    const catHeight = catRect.height;

    // Check if the new position is within the parent boundaries
    if (newX >= 0 && newX + catWidth <= parentWidth && newY >= 0 && newY + catHeight <= parentHeight) {
        cat.style.transform = `translate(${newX}px, ${newY}px) rotate(${currentRotate}deg)`;
    } else {
        // Keep the cat within boundaries
        const boundedX = Math.max(0, Math.min(newX, parentWidth - catWidth));
        const boundedY = Math.max(0, Math.min(newY, parentHeight - catHeight));
        cat.style.transform = `translate(${boundedX}px, ${boundedY}px) rotate(${currentRotate}deg)`;
    }
};



export const turnCatSprite = (cat, degree, dir) => {
    dir = dir === 'CW' ? 1 : -1;

    // Extract the current transform values
    let currentX = 0, currentY = 0, currentRotate = 0;
    const match = cat.style.transform.match(/translate\((-?\d*\.?\d+)px, (-?\d*\.?\d+)px\).*rotate\((-?\d+)deg\)/);
    if (match) {
        currentX = parseFloat(match[1]);
        currentY = parseFloat(match[2]);
        currentRotate = parseFloat(match[3]);
    }

    const newRotate = currentRotate + dir * degree;
    cat.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${newRotate}deg)`;
};


// Alternative Method SET 2
// Method to move Cat in forward direction with boundary checks
// export const moveCatSprite = (cat, steps) => {
//     const parent = cat.parentElement;
//     const parentRect = parent.getBoundingClientRect();
//     const catRect = cat.getBoundingClientRect();

//     // Calculate new position
//     const currentTransform = cat.style.transform;
//     const regex = /translate\(([-\d.]+)px, ([-\d.]+)px\)/g;
//     let match;
//     let currentX = 0;
//     let currentY = 0;

//     // sum up all cat translate movement here
//     while ((match = regex.exec(currentTransform)) !== null) {
//         currentX += parseFloat(match[1]);
//         currentY += parseFloat(match[2]);
//     }

//     const newX = currentX + steps * 10;
//     const newY = currentY;
//     let moveXby = newX - currentX;
//     let moveYby = newY - currentY;

//     console.log("newX, currentX", newX, currentX, moveXby);
//     // Boundary checks
//     if (newX >= 0 && newX + catRect.width <= parentRect.width &&
//         newY >= 0 && newY + catRect.height <= parentRect.height) {
//         cat.style.transform += translate(${moveXby}px, ${moveYby}px);
//     }
// };

// // Logic to turn Cat with boundary checks
// export const turnCatSprite = (cat, degree, dir) => {
//     const parent = cat.parentElement;
//     const parentRect = parent.getBoundingClientRect();
//     const catRect = cat.getBoundingClientRect();

//     // Calculate new rotation
//     dir = dir === 'CW' ? 1 : -1;
//     // const currentTransform = cat.style.transform;
//     // const currentRotate = currentTransform.match(/rotate\(([-\d.]+)deg\)/) || [0, 0];
//     // const currentAngle = parseFloat(currentRotate[1]) || 0;
//     const newAngle =  dir * degree;


//     cat.style.transform += rotate(${newAngle}deg);
// };








































// export const moveCatSprite = (cat, steps) => {
//     const windowWidth = window.innerWidth;
//     const catRect = cat.getBoundingClientRect();
//     const currentTransform = cat.style.transform;

//     let currentX = 0;
//     const match = currentTransform.match(/translate\((\d+)px\)/);
//     if (match) {
//         currentX = parseInt(match[1], 10);
//     }

//     const newX = currentX + steps * 10;
//     const catWidth = catRect.width;

//     // Check if the new position is within the window boundaries
//     if (newX >= 0 && newX + catWidth <= windowWidth) {
//         cat.style.transform = translate(${newX}px);
//     } else if (newX < 0) {
//         cat.style.transform = translate(0px);
//     } else if (newX + catWidth > windowWidth) {
//         cat.style.transform = translate(${windowWidth - catWidth}px);
//     }
// };