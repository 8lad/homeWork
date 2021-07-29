'use strict';

// First task

for (let i = 1; i <= 10; i++) {
    const firstWord = 'Buz';
    const secondWord = 'Fiz';
    if ((i % 2 === 0 && i % 3 === 0) || i % 3 === 0) {
        console.log(secondWord + firstWord);
    } else if (i % 2 === 0) {
        console.log(secondWord);
    } else {
        console.log(firstWord);
    }
}

//  Second task

const testNumber = 7;

function findingFactorial(number) {
    if (!number || number === null || number <= 0) {
        return console.log('The variable is not correct');
    }
    for (let i = number - 1; i > 1; i--) {
        number *= i;
    }
    console.log(number);
    return number;
}

findingFactorial(testNumber);

// Third task

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;


function countingPaperPacks(paperInBox, weeklyUsage, weeks) {
    let totalPaperSheets;
    let paperBoxesAmount;

    totalPaperSheets = weeklyUsage * weeks;
    for (let i = 1; i > 0; i++) {
        totalPaperSheets -= paperInBox;
        if (totalPaperSheets <= 0) {
            paperBoxesAmount = i;
            if (paperBoxesAmount === 1) {
                return console.log(`You need ${paperBoxesAmount} box with paper`);
            }
            if (paperBoxesAmount > 1) {
                return console.log(`You need ${paperBoxesAmount} boxes with paper`);
            }
        }
    }
}

countingPaperPacks(sheetsInReamPaper, consumptionPerWeek, weeksAmount);



// Fourth task


const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
const roomsInPorch = roomsOnFloor * floors;
let porch = findingPorchNumber(roomNumber, roomsInPorch);
let floor = findingFloorNumber(roomNumber, roomsInPorch, roomsOnFloor);

function findingPorchNumber(roomNumber, roomsInPorch) {
    if (roomNumber <= 0 || roomsInPorch <= 0) {
        return false;
    }
    let roomsFor = roomNumber;
    let porchNumber;
    for (let i = 1; i > 0; i++) {
        roomsFor -= roomsInPorch;
        if (roomsFor <= 0) {
            porchNumber = i;
            return porchNumber;
        }
    }
    return porchNumber;
}

function findingFloorNumber(roomNumber, roomsInPorch, roomsOnFloor) {
    if (roomNumber <= 0 || roomsInPorch <= 0 || roomsOnFloor <= 0) {
        return false;
    }
    let roomsLeft = roomNumber % roomsInPorch;
    let floorNumber;
    for (let i = 1; i > 0; i++) {
        roomsLeft -= roomsOnFloor;
        if (roomsLeft <= 0) {
            floorNumber = i;
            return floorNumber;
        }
    }
    return floorNumber;
}

function showYourDestination(porch, floor) {
    if (!porch || !floor) {
        return console.log('Uncorrect input data');
    } else {
        return console.log(`Your destination is ${porch} porch and ${floor} floor`);
    }
}

showYourDestination(porch, floor);


// Fifth task

const medianNumber = 6;
const secondMedianNumber = 8;
let arr = ['#'];
let secondArr = ['#']
let sideSymbols = medianNumber - 1;
let secondSideSymbols = secondMedianNumber - 1;


function creatingPyramid(arr, sideSymbols, medianNumber) {
    for (let i = 0; i < medianNumber; i++) {
        if (i === 0) {
            for (let i = 0; i < sideSymbols; i++) {
                arr.push('-');
                arr.unshift('-');
            }
            console.log(arr.join(''));

        } else {
            for (let i = 0; i < sideSymbols; i++) {
                arr.pop();
                arr.shift();
            }
            --sideSymbols;
            arr.push('#');
            arr.unshift('#');

            for (let i = 0; i < sideSymbols; i++) {
                arr.push('-');
                arr.unshift('-');
            }
            console.log(arr.join(''));
        }
    }
}


creatingPyramid(secondArr, sideSymbols, medianNumber);
creatingPyramid(arr, secondSideSymbols, secondMedianNumber);