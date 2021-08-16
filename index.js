"use strict";

// The first task

const addNewNumber = () => {
  let mainNumber = 0;

  return function (input) {
    mainNumber += input;
    console.log(mainNumber);
  };
};

const counter = addNewNumber();

counter(3);
counter(5);
counter(228);

// The second task

const createNewArray = () => {
  let storage = [];
  return function (input) {
    if (input === undefined) {
      storage = [];
      return console.log(storage);
    }
    storage.push(input);
    console.log(storage);
  };
};
const getUpdatedArr = createNewArray();
getUpdatedArr(3);
getUpdatedArr(5);
getUpdatedArr({ name: "Vasya" });
getUpdatedArr();
getUpdatedArr(4);

// The third task

const findTime = () => {
  let startTime = new Date().getTime();
  let counter = 0;

  return function () {
    if (counter === 0) {
      counter++;
      return console.log("Enabled");
    }
    let endTime = new Date().getTime();
    let timeDifference = Math.floor((endTime - startTime) / 1000);
    startTime = endTime;
    console.log(timeDifference);
  };
};
const getTime = findTime();
