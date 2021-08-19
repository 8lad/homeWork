"use strict";

// The first task

function removeUser(arr, index) {
  arr.splice(index, 1);
  return arr;
}

const arr = ["Vasya", "Petya", "Alexey"];
removeUser(arr, 1);
console.log(arr);

//  The second task

function getAllKeys(object) {
  let allKeys = Object.keys(object);
  return console.log(allKeys);
}

const obj = { name: "Vasya", age: 1 };
getAllKeys(obj);

// The third task

function getAllValues(object) {
  let allKeys = Object.values(object);
  return console.log(allKeys);
}

const obj2 = { name: "Vasya", age: 1 };
getAllValues(obj2);

// The fourth task

const secondObj = {
  index: 4,
  name: "Katya",
  greeting: "Hello, Ernestine Witt! You have 8 unread messages.",
  address: "414 Montauk Avenue, Winchester, Hawaii, 9391",
};

function insertIntoarr(object, index) {
  let targetElement;
  condidateArr.forEach((element) => {
    if (element["index"] === index) {
      return (targetElement = index);
    }
  });
  if (
    typeof targetElement === "number" &&
    targetElement <= condidateArr.length &&
    targetElement >= 0
  ) {
    condidateArr.splice(targetElement, 0, object);
    return condidateArr;
  }
}

insertIntoarr(secondObj, 2);

console.log(condidateArr);

// The fifth task

class Condidate {
  constructor(object) {
    this._id = object._id;
    this.index = object.index;
    this.guid = object.guid;
    this.isActive = object.isActive;
    this.balance = object.balance;
    this.picture = object.picture;
    this.age = object.age;
    this.eyeColor = object.eyeColor;
    this.name = object.name;
    this.gender = object.gender;
    this.company = object.company;
    this.email = object.email;
    this.phone = object.phone;
    this.address = object.address;
    this.about = object.about;
    this.registered = object.registered;
    this.latitude = object.latitude;
    this.longitude = object.longitude;
    this.tags = object.tags;
    this.friends = object.friends;
    this.greeting = object.greeting;
    this.favoriteFruit = object.favoriteFruit;
    this.state = this.getCondidateState(this.address);
  }
  getCondidateState(adress) {
    let adressArray = adress.split(",");
    return adressArray[2];
  }
}

let condidate = new Condidate(condidateArr[50]);
console.log(condidate.state);
let condidate2 = new Condidate(condidateArr[33]);
console.log(condidate2.state);

// The sixth task

function getCompanyNames(arr) {
  let companiesList = [];
  arr.forEach((element) => companiesList.push(element.company));
  let modifidedCompanuesList = new Set(companiesList);
  companiesList = [...modifidedCompanuesList];
  companiesList = companiesList.filter((item) => {
    if (typeof item === "string") {
      return item;
    }
  });
  return companiesList;
}

console.log(getCompanyNames(condidateArr));

// The seventh task

function getUserByYear(comparingYear) {
  let listByYears = [];
  condidateArr.forEach((element) => {
    let registrationYear = new Date(element.registered);
    if (comparingYear === registrationYear.getFullYear()) {
      listByYears.push(element._id);
    }
  });
  return listByYears.length === 0 ? "Incorect year" : listByYears;
}

console.log(getUserByYear(2014));

// The eight task

function getCondidatesByUnreadMsg() {
  let arrayCondidatesSortedByMessages = condidateArr.map(
    (element) => new Condidate(element)
  );
  arrayCondidatesSortedByMessages.forEach((element) => {
    if (typeof element.greeting === "string") {
      let chekNum = /\d+ /;
      let numberInGreetings = element.greeting.match(chekNum);
      element.unreadMsgs = +numberInGreetings[0];
    }
  });
  arrayCondidatesSortedByMessages.sort((a, b) => {
    return a.unreadMsgs - b.unreadMsgs;
  });
  arrayCondidatesSortedByMessages.forEach(
    (element) => delete element.unreadMsgs
  );
  return arrayCondidatesSortedByMessages;
}
console.log(getCondidatesByUnreadMsg());

// The ninth task

function getCondidatesByGender(gender) {
  if (gender === "male" || gender === "female") {
    let arraySortedByGender = condidateArr.filter((element) => {
      if (element.gender === gender) {
        return element;
      }
    });
    return arraySortedByGender;
  } else {
    return "Incorect gender";
  }
}
console.log(getCondidatesByGender("female"));
