'use strict';


// The first task
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = [];

function creatingListOfCountries(obj) {
    for (let key in obj) {
        let oneValueOfObject = ` ${key} -  это ${obj[key]}`;
        result.push(oneValueOfObject);
    }
    return result;
}

creatingListOfCountries(citiesAndCountries);

console.log(result);

// The second task

const amount = 12;

function getArray(amount) {
    let result = [];
    let array = [];
    if (amount % 3 != 0) {
        return console.log('You entered invalid number');
    }
    for (let i = 1; i <= amount; i++) {
        if (i % 3 == 0) {
            array.push(i);
            result.push(array);
            array = [];
        } else {
            array.push(i);
        }
    }
    console.log(result);
}

getArray(amount);



//  The third task

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
const lang = 'ru';
const day = 7;

function getNameOfDay(lang, day, obj) {
    if ((lang === 'ru' || lang === 'en') && (day <= 7 && day >= 1)) {
        let chooosenLanguage = obj[lang];
        let choosenDay = chooosenLanguage[day - 1];
        return console.log(choosenDay);
    }
    return console.log('You entered invalid data');
}

getNameOfDay(lang, day, namesOfDays);

// The fourth task

const singleArray = [19, 5, 42, 2, 77];

function findTwoMinValues(array) {
    let result;
    let newArray = array.filter((item) => {
        return (item > 0 && item % 1 === 0);
    });
    if (newArray.length < 4) {
        return console.log('Your array does\'t have enough numbers');
    }
    newArray.sort((a, b) => {
        return a - b;
    });
    result = newArray[0] + newArray[1];
    return console.log(result);
}

findTwoMinValues(singleArray);

// The fifth task


const binaryArray = [1, 1, 1, 0, 0, 1];

function turnFromBinaryToDecimal(array) {
    let result = 0;
    let counter = 1;
    array.reverse();
    for (let key in array) {
        if (array[key] > 1 || array[key] < 0) {
            return console.log('Ivalid values in your array');
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (i > 0) {
            counter *= 2;
        }
        if (array[i] === 1) {
            result += counter;
        }
    }
    return console.log(result);
}


turnFromBinaryToDecimal(binaryArray);