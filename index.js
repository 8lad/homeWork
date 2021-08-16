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

// The fourth task

const time = 65;

const timer = (time) => {
  if (typeof time !== "number" || time < 0) {
    return console.log("incorrect value");
  }
  let minutes = Math.trunc(time / 60);
  let seconds = time % 60;

  let counter = setInterval(() => {
    if (seconds >= 0) {
      if (seconds !== 59) {
        console.log(
          `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`
        );
      }
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
      console.log(
        `${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`
      );
    }
    if (minutes <= 0 && seconds < 1) {
      setTimeout(() => {
        console.log("Time end");
        return clearInterval(counter);
      }, 1000);
    }
  }, 1000);
};

timer(time);
